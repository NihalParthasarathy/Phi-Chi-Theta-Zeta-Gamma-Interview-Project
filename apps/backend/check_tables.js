import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function checkTables() {
  try {
    // Try to list all tables
    const { data, error } = await supabase.rpc('get_schema_tables');

    if (error) {
      console.log('Using alternative method...');
      // Alternative: try to access the table directly
      const { data: testData, error: testError } = await supabase
        .from('responses')
        .select('*')
        .limit(1);

      if (testError) {
        console.log('❌ Table access error:', testError.message);
        console.log('💡 Make sure the table is named "responses" in the public schema');
      } else {
        console.log('✅ Table exists and is accessible!');
        console.log('📊 Sample data:', testData);
      }
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

checkTables();
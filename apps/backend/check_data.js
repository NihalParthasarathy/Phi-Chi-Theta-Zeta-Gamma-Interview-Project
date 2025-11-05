import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function checkStoredData() {
  try {
    const { data, error } = await supabase
      .from('responses')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      console.log('❌ Error:', error.message);
    } else {
      console.log('✅ Recent responses from database:');
      console.log('📊 Total records:', data.length);
      data.forEach((record, index) => {
        console.log(`\n${index + 1}. ID: ${record.id}`);
        console.log(`   Email: ${record.user_email}`);
        console.log(`   Response: ${record.response_text.substring(0, 100)}...`);
        console.log(`   Created: ${new Date(record.created_at).toLocaleString()}`);
      });
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

checkStoredData();
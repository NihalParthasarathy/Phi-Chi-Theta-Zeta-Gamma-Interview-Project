import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Test connection
async function testConnection() {
  try {
    const { data, error } = await supabase
      .from('responses')
      .select('count', { count: 'exact', head: true });

    if (error) {
      console.log('❌ Table error:', error.message);
      console.log('💡 You need to create the responses table in Supabase');
    } else {
      console.log('✅ Database connection successful!');
    }
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

testConnection();
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function debugSupabase() {
  console.log('🔍 Debugging Supabase connection...');
  console.log('📡 URL:', process.env.SUPABASE_URL);
  console.log('🔑 Service Role Key:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Present' : 'Missing');

  // Test 1: Try to create the table via JS
  console.log('\n1️⃣ Attempting to create table...');
  try {
    const { data, error } = await supabase.rpc('exec', {
      query: `
        CREATE TABLE IF NOT EXISTS public.responses (
          id BIGSERIAL PRIMARY KEY,
          user_email VARCHAR(255) NOT NULL,
          response_text TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `
    });

    if (error) {
      console.log('❌ RPC create failed:', error.message);
    } else {
      console.log('✅ Table creation via RPC successful');
    }
  } catch (err) {
    console.log('❌ RPC method not available');
  }

  // Test 2: Try direct insert (this will tell us if table exists)
  console.log('\n2️⃣ Testing direct insert...');
  try {
    const { data, error } = await supabase
      .from('responses')
      .insert([
        {
          user_email: 'debug@test.com',
          response_text: 'Debug test from script'
        }
      ])
      .select();

    if (error) {
      console.log('❌ Insert failed:', error.message);
      console.log('💡 Error code:', error.code);
      console.log('💡 Error details:', error.details);
    } else {
      console.log('✅ Insert successful:', data);
    }
  } catch (err) {
    console.log('❌ Insert error:', err.message);
  }

  // Test 3: Try to list tables
  console.log('\n3️⃣ Checking what tables exist...');
  try {
    const { data, error } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public');

    if (error) {
      console.log('❌ Schema query failed:', error.message);
    } else {
      console.log('📋 Available tables:');
      data.forEach(table => console.log('  -', table.table_name));
    }
  } catch (err) {
    console.log('❌ Schema query error:', err.message);
  }
}

debugSupabase();
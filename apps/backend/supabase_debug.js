// Import the function that lets us create a Supabase client (used to connect to our database)
import { createClient } from "@supabase/supabase-js";

// Import dotenv so we can load environment variables (like API keys) from a .env file
import dotenv from "dotenv";

// Load the environment variables from .env into process.env
dotenv.config();

// Create a Supabase client connection using our URL and secret key
const supabase = createClient(
  process.env.SUPABASE_URL,               // The URL of the Supabase project
  process.env.SUPABASE_SERVICE_ROLE_KEY   // Secret key with full access to the database
);

// Define an async function that helps debug our Supabase setup
async function debugSupabase() {
  // Log that the debugging process has started
  console.log('🔍 Debugging Supabase connection...');

  // Log the Supabase project URL
  console.log('📡 URL:', process.env.SUPABASE_URL);

  // Log whether the service role key is present or missing (without showing it for security)
  console.log('🔑 Service Role Key:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Present' : 'Missing');

  // ------------------------------
  // 🧪 TEST 1: Try to create a table using a Supabase remote procedure call (RPC)
  // ------------------------------
  console.log('\n1️⃣ Attempting to create table...');
  try {
    // Try to execute a custom SQL query via RPC called 'exec' (if it exists in Supabase)
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

    // If Supabase returned an error, log it
    if (error) {
      console.log('❌ RPC create failed:', error.message);
    } else {
      // Otherwise confirm the table was created successfully
      console.log('✅ Table creation via RPC successful');
    }
  } catch (err) {
    // If the RPC method isn’t available, let the user know
    console.log('❌ RPC method not available');
  }

  // ------------------------------
  // 🧪 TEST 2: Try inserting data directly into the 'responses' table
  // ------------------------------
  console.log('\n2️⃣ Testing direct insert...');
  try {
    // Try inserting a test record into the 'responses' table
    const { data, error } = await supabase
      .from('responses') // Choose the 'responses' table
      .insert([
        {
          user_email: 'debug@test.com',         // Test email address
          response_text: 'Debug test from script' // Sample text
        }
      ])
      .select(); // Return the inserted record for verification

    // If Supabase returns an error, show the details
    if (error) {
      console.log('❌ Insert failed:', error.message);
      console.log('💡 Error code:', error.code);
      console.log('💡 Error details:', error.details);
    } else {
      // Otherwise log that the insert worked and print the returned data
      console.log('✅ Insert successful:', data);
    }
  } catch (err) {
    // Catch any unexpected errors that break the insert call
    console.log('❌ Insert error:', err.message);
  }

  // ------------------------------
  // 🧪 TEST 3: Try listing all tables in the database’s public schema
  // ------------------------------
  console.log('\n3️⃣ Checking what tables exist...');
  try {
    // Query the database system table to list all tables in the 'public' schema
    const { data, error } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public');

    // If there’s an error getting the schema, log it
    if (error) {
      console.log('❌ Schema query failed:', error.message);
    } else {
      // Otherwise print out the list of tables found
      console.log('📋 Available tables:');
      data.forEach(table => console.log('  -', table.table_name));
    }
  } catch (err) {
    // Catch any unexpected errors that occur during schema query
    console.log('❌ Schema query error:', err.message);
  }
}

// Call the debug function to actually run the tests
debugSupabase();

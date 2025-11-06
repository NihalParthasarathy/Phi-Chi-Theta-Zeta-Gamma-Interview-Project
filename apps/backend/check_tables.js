// Import the function to create a Supabase client (used to connect to your database)
import { createClient } from "@supabase/supabase-js";

// Import dotenv so we can load variables like keys and URLs from a .env file
import dotenv from "dotenv";

// Load all environment variables from the .env file into process.env
dotenv.config();

// Create a Supabase client using our project URL and service role key
// This connects our code to the Supabase database securely
const supabase = createClient(
  process.env.SUPABASE_URL,               // The URL of the Supabase project
  process.env.SUPABASE_SERVICE_ROLE_KEY   // Secret key that allows database access
);

// Define an async function that checks if our database tables exist and are accessible
async function checkTables() {
  try {
    // Try calling a stored procedure named 'get_schema_tables' to list all tables in the schema
    const { data, error } = await supabase.rpc('get_schema_tables');

    // If there’s an error calling that procedure, use an alternative check
    if (error) {
      console.log('Using alternative method...');

      // Try directly accessing the 'responses' table to see if it exists
      const { data: testData, error: testError } = await supabase
        .from('responses')   // Target the 'responses' table
        .select('*')         // Select all columns
        .limit(1);           // Only get one record for testing

      // If there’s still an error, log that the table couldn’t be accessed
      if (testError) {
        console.log('❌ Table access error:', testError.message);
        console.log('💡 Make sure the table is named "responses" in the public schema');
      } else {
        // Otherwise, confirm the table exists and print a sample record
        console.log('✅ Table exists and is accessible!');
        console.log('📊 Sample data:', testData);
      }
    }
  } catch (err) {
    // Catch any unexpected errors and print them to the console
    console.error('❌ Error:', err.message);
  }
}

// Run the function to perform the table check
checkTables();

// Import the function that creates a Supabase client (to connect to our database)
import { createClient } from "@supabase/supabase-js";

// Import dotenv so we can load environment variables from the .env file
import dotenv from "dotenv";

// Load the environment variables (like Supabase URL and API keys) into process.env
dotenv.config();

// Create a Supabase client using our project URL and secret key from the environment
const supabase = createClient(
  process.env.SUPABASE_URL,               // The Supabase project URL
  process.env.SUPABASE_SERVICE_ROLE_KEY   // The secret service role key with full access
);

// Define an async function to test if our Supabase connection is working
async function testConnection() {
  try {
    // Try selecting data from the 'responses' table just to test if we can reach the database
    // This uses a count query to check if the table exists and is accessible
    const { data, error } = await supabase
      .from('responses')                   // Target the 'responses' table
      .select('count', { count: 'exact', head: true }); // Only return the count (no actual rows)

    // If there’s an error, tell the user what’s wrong
    if (error) {
      console.log('❌ Table error:', error.message);
      console.log('💡 You need to create the responses table in Supabase');
    } else {
      // If there’s no error, it means the connection worked
      console.log('✅ Database connection successful!');
    }
  } catch (err) {
    // Catch and display any unexpected errors (like connection issues)
    console.error('❌ Connection failed:', err.message);
  }
}

// Run the testConnection function to perform the connection check
testConnection();

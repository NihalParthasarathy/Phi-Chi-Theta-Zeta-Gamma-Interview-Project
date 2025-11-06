// Import the function to create a Supabase client (used to connect to the Supabase database)
import { createClient } from "@supabase/supabase-js";

// Import dotenv so we can load our environment variables from a .env file
import dotenv from "dotenv";

// Load the .env variables into process.env so we can use them in our code
dotenv.config();

// Create a Supabase client using our project URL and service role key
// This lets our script connect securely to the Supabase database
const supabase = createClient(
  process.env.SUPABASE_URL,               // URL of the Supabase project
  process.env.SUPABASE_SERVICE_ROLE_KEY   // Secret key with permissions to read data
);

// Define an asynchronous function to check and display the most recent data
async function checkStoredData() {
  try {
    // Query the 'responses' table for all columns, ordered by newest entries first, limited to 10 rows
    const { data, error } = await supabase
      .from('responses')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    // If Supabase returns an error, log it
    if (error) {
      console.log('❌ Error:', error.message);
    } else {
      // Otherwise, print the number of records retrieved and their details
      console.log('✅ Recent responses from database:');
      console.log('📊 Total records:', data.length);

      // Loop through each record and log key information
      data.forEach((record, index) => {
        console.log(`\n${index + 1}. ID: ${record.id}`); // Show record number and ID
        console.log(`   Email: ${record.user_email}`);    // Show the email field
        console.log(`   Response: ${record.response_text.substring(0, 100)}...`); // Show first 100 chars of response
        console.log(`   Created: ${new Date(record.created_at).toLocaleString()}`); // Format creation date
      });
    }
  } catch (err) {
    // Catch any unexpected errors and print them
    console.error('❌ Error:', err.message);
  }
}

// Call the function to actually run the database check
checkStoredData();

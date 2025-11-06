// Import the function that lets us create a Supabase client (connection to our database)
import { createClient } from "@supabase/supabase-js";

// Import dotenv so we can use variables from our .env file (like API keys)
import dotenv from "dotenv";
//hi
// Load the variables from the .env file into process.env
dotenv.config();

// Create a Supabase client using our project URL and service role key from environment variables
// These connect our backend securely to the Supabase database
export const supabase = createClient(
  process.env.SUPABASE_URL!,              // The URL of our Supabase project
  process.env.SUPABASE_SERVICE_ROLE_KEY!  // Secret key with permission to insert data
);

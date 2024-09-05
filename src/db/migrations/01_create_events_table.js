const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

console.log('Initializing Supabase client...');
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function checkEventsTable() {
  console.log('Checking if events table exists...');
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Error checking events table:', error);
      console.error('Full error object:', JSON.stringify(error, null, 2));
    } else {
      console.log('Events table exists and is accessible');
      console.log('Sample data:', data);
    }
  } catch (err) {
    console.error('Unexpected error in checkEventsTable:', err);
    console.error('Full error object:', JSON.stringify(err, null, 2));
  }
}

checkEventsTable().then(() => {
  console.log('Migration script completed.');
}).catch((err) => {
  console.error('Error in migration script:', err);
  console.error('Full error object:', JSON.stringify(err, null, 2));
});
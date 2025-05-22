import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mernpafbodniyukfhxib.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lcm5wYWZib2RuaXl1a2ZoeGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NDcwMjAsImV4cCI6MjA2MzIyMzAyMH0.aT45mqYi9aHMRptwfqOnPoWgSOmFSu9iro2FZ3EBqnk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

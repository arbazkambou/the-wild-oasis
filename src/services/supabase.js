import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xqremeixfselkmyykcxl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxcmVtZWl4ZnNlbGtteXlrY3hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NTEzMDksImV4cCI6MjA3MjIyNzMwOX0.HYcWIDMM6xq0YA5-HwR51OyCD6gi18_g-L-y_pY4O8c";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

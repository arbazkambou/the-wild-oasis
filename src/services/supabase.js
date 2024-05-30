import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://givqrbiqfmdaeqiflnyr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpdnFyYmlxZm1kYWVxaWZsbnlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNDI1OTksImV4cCI6MjAyOTYxODU5OX0.cRKU25kYX68bL9v9GcUrgRJI3tVcXDdjYeCqfxzQofI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fxffpmlofffypwldnjay.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4ZmZwbWxvZmZmeXB3bGRuamF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0Nzg2NzMsImV4cCI6MjAwNzA1NDY3M30.XE7XsvfOH7jf91cYf-qHoGp6KHfQtNZTrHnDQjJzLLo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
(supabase as any).realtime.decode = function () {};

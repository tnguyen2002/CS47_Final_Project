import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://sekphxvplwoezbsumljv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNla3BoeHZwbHdvZXpic3VtbGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3NTM5MjIsImV4cCI6MTk5NDMyOTkyMn0.eur-PWDZoO9wPcTpt24reQLcwa9I923uPpW9mxpuEbE";
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

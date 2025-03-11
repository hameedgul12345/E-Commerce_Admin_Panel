import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://lrrzrpklmsenpgwizgrx.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxycnpycGtsbXNlbnBnd2l6Z3J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MDI4NzQsImV4cCI6MjA1NjQ3ODg3NH0.viZpOzSONKDa71sObj3ZShTfWDgHETnUAPYTeeGnetA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

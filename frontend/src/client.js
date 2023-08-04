import { createClient } from '@supabase/supabase-js';

const URL = 'https://qcxnnzgnhgwigexokdxe.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjeG5uemduaGd3aWdleG9rZHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2MDQwNjMsImV4cCI6MjAwNjE4MDA2M30.n3hGZN-kiTcMa_4CfkG1gLqczOaWsn8Ef-StweA-MGA';

export const supabase = createClient(URL, API_KEY);


import { createClient } from '@supabase/supabase-js';
import type {Database} from '../types/db_types';

const supabaseUrl = 'https://thdwftgaeloxumzkaawu.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;



export default createClient<Database>(supabaseUrl, supabaseKey || '');

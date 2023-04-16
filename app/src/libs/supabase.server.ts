import { createServerClient } from '@supabase/auth-helpers-remix';
import type { Database } from 'src/types';
import type { Request, Response } from '@remix-run/node';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export default ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) =>
  createServerClient<Database>(supabaseUrl || '', supabaseKey || '', {
    request,
    response,
  });

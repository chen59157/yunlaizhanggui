// EdgeOne Pages - Edge Function
// Simple visitor counter using EdgeOne KV-like in-memory storage
// GET /api/visitor

let visitCount = 0;

export async function handler(request: Request): Promise<Response> {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method === 'GET') {
    visitCount++;
    return new Response(
      JSON.stringify({ success: true, visits: visitCount }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  return new Response(
    JSON.stringify({ success: false, error: 'Method not allowed' }),
    { status: 405, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
  );
}

export const config = {
  path: '/api/visitor',
};

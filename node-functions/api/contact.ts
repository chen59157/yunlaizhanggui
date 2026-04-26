// EdgeOne Pages - Edge Function
// Contact form API endpoint
// POST /api/contact

export async function handler(request: Request): Promise<Response> {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, error: 'Method not allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }

  try {
    const body = await request.json() as {
      name?: string;
      phone?: string;
      email?: string;
      business?: string;
      message?: string;
    };

    // Validate required fields
    const errors: string[] = [];
    if (!body.name?.trim()) errors.push('请填写您的姓名');
    if (!body.phone?.trim()) errors.push('请填写联系电话');
    if (!body.business) errors.push('请选择业务类型');

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ success: false, errors }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Validate phone format
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(body.phone.replace(/\s/g, ''))) {
      return new Response(
        JSON.stringify({ success: false, errors: ['请输入正确的手机号码'] }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // In production, integrate with email service / CRM
    // For now, log and return success
    console.log('Contact form submission:', {
      name: body.name,
      phone: body.phone,
      email: body.email,
      business: body.business,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: '感谢您的咨询！我们将在24小时内与您联系。',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Invalid request body' }),
      { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
}

export const config = {
  path: '/api/contact',
};

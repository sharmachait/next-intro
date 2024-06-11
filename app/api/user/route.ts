import { NextRequest, NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    name: 'chaitanya',
  });
}

export async function POST(req: NextRequest) {
  let body = await req.json();
  console.log({ body });
  console.log(req.headers.get('token'));
  console.log(req.nextUrl.searchParams.get('filter'));
  return NextResponse.json({
    name: 'chaitanya',
  });
}

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();
export async function POST(req: NextRequest) {
  let body = await req.json();
  console.log({ body });
  console.log(req.headers.get('token'));
  console.log(req.nextUrl.searchParams.get('filter'));
  const user = await client.userNext.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });
  return NextResponse.json(user);
}

// api/revalidate/route.tsx

import { revalidateTag } from 'next/cache'
import type { NextApiRequest } from 'next'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  try {

    console.log("🚀 ~ POST ~ req:", await req.json())


    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
    })
  } catch (err: unknown) {
    console.error(err)
    if (err instanceof Error) {
      return new Response(err.message, { status: 500 })
    }
    return new Response('Error', { status: 500 })
  }
}

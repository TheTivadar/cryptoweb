
import { getUserBalance } from '@/components/prisma/addUser'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  
  if (!userId) {
    return NextResponse.json({ error: 'User ID required' }, { status: 400 })
  }

  try {
    const balance = await getUserBalance(userId)
    return NextResponse.json({ balance })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch balance' }, { status: 500 })
  }
}
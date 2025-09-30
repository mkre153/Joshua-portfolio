import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/guestbook - Fetch all guestbook entries
export async function GET() {
  try {
    const entries = await prisma.guestbookEntry.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(entries);
  } catch (error) {
    console.error('Error fetching guestbook entries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch guestbook entries' },
      { status: 500 }
    );
  }
}

// POST /api/guestbook - Create a new guestbook entry
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    // Validation
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be less than 100 characters' },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: 'Message must be less than 500 characters' },
        { status: 400 }
      );
    }

    // Create entry
    const entry = await prisma.guestbookEntry.create({
      data: {
        name,
        message,
      },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error('Error creating guestbook entry:', error);
    return NextResponse.json(
      { error: 'Failed to create guestbook entry' },
      { status: 500 }
    );
  }
}
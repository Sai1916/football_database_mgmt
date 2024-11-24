import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export async function POST(request: NextRequest) {
    
  try {
    const body = await request.json();
    const {name, age, nationality, position, teamId} = body;

    console.log('name, age, nationality, position, team_id', name, age, nationality, position, teamId);

    const newPlayer = await prisma.players.create({
        data:{
            player_name: name,
            age: age,
            nationality,
            position,
            team_id: Number(teamId),
        }
    });
    return NextResponse.json(
        { message: 'Player created successfully', player: newPlayer },
        { status: 201 }
    );
  } catch (error) {
    console.error('Error creating player:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

import { getTeamForUser } from '@/lib/db/queries';

export async function GET() {
  // For development: return mock data for landing page
  if (process.env.NODE_ENV === 'development') {
    return Response.json({ 
      id: 1, 
      name: 'AImax Healthcare',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  }

  try {
    const team = await getTeamForUser();
    return Response.json(team);
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Database connection failed' }, { status: 500 });
  }
}

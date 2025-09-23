import { getUser } from '@/lib/db/queries';

export async function GET() {
  // For development: return mock data for landing page
  if (process.env.NODE_ENV === 'development') {
    return Response.json({ 
      id: 1, 
      email: 'demo@aimax.com', 
      name: 'Demo User',
      role: 'owner' 
    });
  }

  try {
    const user = await getUser();
    return Response.json(user);
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Database connection failed' }, { status: 500 });
  }
}

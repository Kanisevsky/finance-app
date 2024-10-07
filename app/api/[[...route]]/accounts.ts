import { db } from '@/db/drizzle';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { accounts } from '@/db/schema';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';

const app = new Hono().get('/', clerkMiddleware(), async (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    throw new HTTPException(401, {
      res: c.json({ error: 'Unauthorised' }, 401),
    });
  }
  const data = await db
    .select({
      id: accounts.id,
      name: accounts.name,
    })
    .from(accounts);

  return c.json({ data });
});

export default app;

import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const accounts = pgTable('accounts', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  plaidId: text('plaid_id'),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

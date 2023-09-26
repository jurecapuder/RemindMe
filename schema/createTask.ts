import {z} from 'zod';

export const createTaskSchema = z.object({
  collectionId: z.number().nonnegative(),
  content: z.string().min(8, {
    message: "Task content must be at least 8 characters long"
  }),
  expiresAt: z.string().optional(),
});

export type createTaskSchema = z.infer<typeof createTaskSchema>;
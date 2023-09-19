import { z } from 'zod';

export const createCollectionSchema = z.object({
  name: z.string().min(4, {
      message: 'Collection name must be at least 4 characters long'
    }),
  color: z.string(),
});
"use client";
import { Task } from '@prisma/client';
import React from 'react'
import { Checkbox } from './ui/checkbox';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

function TaskCard({task}:{task:Task}) {
  return (
    <div>
      <Checkbox />

      <label>
        {task.content}
        {task.expiresAt && (
          <p className={cn(
            "text-xs text-neutral-500 dark:text-neutral-400",
            getExpirationColor(task.expiresAt)
          )}>
            {format(task.expiresAt, "dd/MM/yyyy")}
          </p>
        )}
      </label>
    </div>
  )
}

export default TaskCard
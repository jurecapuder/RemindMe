"use client";
import { Task } from '@prisma/client';
import React from 'react'
import { Checkbox } from './ui/checkbox';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

function getExpirationColor(expiresAt: Date) {
  const days = Math.floor(expiresAt.getTime() - Date.now()) / 1000 / 60 / 60;

  if (days < 0) return "text-gray-500 dark:text-gray-400"

  if (days <= 3 * 24) return "text-red-500 dark:text-red-400";

  if (days <= 7 * 24) return "text-orange-500 dark:text-orange-400";

  return "text-green-500 dark:text-green-400";
}

function TaskCard({task}:{task:Task}) {
  return (
    <div className='flex gap-2 items-start'>
      <Checkbox
        id={task.id.toString()}
        className='w-5 h-5'
        checked={task.done}
      />

      <label htmlFor={task.id.toString()} className={cn(
        "text-sm font-medium leading-none near-disabled:cursor-not-allowed peer-disabled:opacity-70 decoration-1 dark:decoration-white",
        task.done && "line-through"
      )}>
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
"use client";
import { Task } from '@prisma/client';
import React from 'react'

function TaskCard({task}:{task:Task}) {
  return (
    <div>Task Card</div>
  )
}

export default TaskCard
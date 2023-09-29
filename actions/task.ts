"use server";

import prisma from "@/lib/prisma";
import { createTaskSchema } from "@/schema/createTask";
import { currentUser } from "@clerk/nextjs";

export async function createTask(data: createTaskSchema) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  const { content, expiresAt, collectionId } = data;

  return await prisma.task.create({
    data: {
      userId: user.id,
      content,
      expiresAt,
      Collection: {
        id: collectionId
      }
    },
  });

}

export async function setTaskToDone(id: number) {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return await prisma.task.update({
    where: {
      id: id,
      userId: user.id,
    },
    data: {
      done: true
    }
  });
}
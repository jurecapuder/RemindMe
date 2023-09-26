"use client";

import { Collection } from '@prisma/client';
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { cn } from '@/lib/utils';
import { CollectionColor, CollectionColors } from '@/lib/constants';

interface Props {
  open: boolean;
  collection: Collection;
  setOpen: (open: boolean) => void;
}

function CreateTaskDialog({ open, setOpen, collection }: Props) {
  const openChangeWrapper = (value: boolean) => {
    setOpen(value);
  }

  return (
    <Dialog open={open} onOpenChange={openChangeWrapper}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='flex gap-2'>
            Add task to collection:

            <span className={cn(
              "p-[1px] bg-clip-text text-transparent",
              CollectionColors[collection.color as CollectionColor]
              )}
            >
              {collection.name}
            </span>
          </DialogTitle>

          <DialogDescription>
            Add a task to your collection. You can add as many tasks as you want to a collection.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CreateTaskDialog
"use client";

import { Collection } from '@prisma/client';
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Add task to collection

            <span>
              {collection.name}
            </span>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CreateTaskDialog
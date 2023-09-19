import React from 'react'
import { Sheet, SheetContent } from './ui/sheet';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function CreateCollectionSheet({ open, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        Test
      </SheetContent>
    </Sheet>
  )
}

export default CreateCollectionSheet
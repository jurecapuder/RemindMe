import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from './ui/sheet';
import { useForm } from 'react-hook-form';
import { createCollectionSchema, createCollectionSchemaType } from '@/schema/createCollection';
import { zodResolver } from '@hookform/resolvers/zod'; 

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function CreateCollectionSheet({ open, onOpenChange }: Props) {
  const form = useForm<createCollectionSchemaType>({
    resolver: zodResolver(createCollectionSchema),
    defaultValues: {},
  })

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Add new collection
          </SheetTitle>

          <SheetDescription>
            Collections are a way to group your tasks.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default CreateCollectionSheet
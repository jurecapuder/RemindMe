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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectValue } from './ui/select';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function CreateCollectionSheet({ open, onOpenChange }: Props) {
  const form = useForm<createCollectionSchemaType>({
    resolver: zodResolver(createCollectionSchema),
    defaultValues: {},
  })

  const onSubmit = (data: createCollectionSchemaType) => {
    console.log("SUBMITTED", data)
  }

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

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>

                <FormControl>
                  <Input placeholder='Personal' {...field} />
                </FormControl>

                <FormDescription>Collection name</FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='color'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>

                <FormControl>
                  <Select>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Color"
                        className="w-full h-8"
                      />
                    </SelectTrigger>
                  </Select>
                </FormControl>

                <FormDescription>Select a color for your collection</FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      </SheetContent>
    </Sheet>
  )
}

export default CreateCollectionSheet
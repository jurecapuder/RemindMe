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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CollectionColor, CollectionColors } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

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
                  <Select onValueChange={(color) => field.onChange(color)}>
                    <SelectTrigger
                      className={cn(
                        "w-full h-8 text-white",
                        CollectionColors[field.value as CollectionColor]
                      )}
                      >
                      <SelectValue
                        placeholder="Color"
                        className="w-full h-8"
                      />
                    </SelectTrigger>
                    <SelectContent className='w-full'>
                      {Object.keys(CollectionColors).map((color) => (
                        <SelectItem
                          key={color}
                          value={color}
                          className={cn(`w-full h-8 rounded-md my-1 text-white focus:text-white focus:font-bold focus:ring-2 ring-neutral-600 focus:ring-inset dark:focus:ring-white focus:px-8`,
                            CollectionColors[color as CollectionColor]
                          )}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormDescription>
                  Select a color for your collection
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      <div className='flex flex-col gap-3 mt-4'>
        <Separator />
        <Button>Confirm</Button>
      </div>
      </SheetContent>
    </Sheet>
  )
}

export default CreateCollectionSheet
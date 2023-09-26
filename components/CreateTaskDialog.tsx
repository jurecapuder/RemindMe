"use client";

import { Collection } from '@prisma/client';
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { cn } from '@/lib/utils';
import { CollectionColor, CollectionColors } from '@/lib/constants';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { createCollectionSchemaType } from '@/schema/createCollection';
import { createTaskSchema } from '@/schema/createTask';
import { Textarea } from './ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { Button } from './ui/button';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

interface Props {
  open: boolean;
  collection: Collection;
  setOpen: (open: boolean) => void;
}

function CreateTaskDialog({ open, setOpen, collection }: Props) {
  const form = useForm<createCollectionSchemaType>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      collectionId: collection.id,
    },
  })

  const openChangeWrapper = (value: boolean) => {
    setOpen(value);
  }

  const onSubmit = async (data: createTaskSchemaType) => {
    console.log("SUBMITTED", data)
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

        <div className='gap-4 py-4'>
          <Form {...form}>
            <form
              className='space-y-4 flex flex-col'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Content
                    </FormLabel>

                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder='Task content here'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expiresAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Expires at
                    </FormLabel>

                    <FormDescription>
                      When should this task expire?
                    </FormDescription>

                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant={"outline"} className={cn(
                            "justfity-start text-left font-normal w-full",
                            !field.value && "text-muted-foreground"
                          )}>
                            <CalendarIcon className='mr-2 h-4 w-4' />

                            {field.value && format(field.value, "PPP")}

                            {!field.value && <span>No expiration</span>}
                          </Button>
                        </PopoverTrigger>

                        <PopoverContent>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <DialogFooter>
          <Button className={cn(
            "w-full dark:text-white text-white",
            CollectionColors[collection.color as CollectionColor]
            )}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateTaskDialog
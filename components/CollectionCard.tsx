"use client";

import { Collection } from '@prisma/client';
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { CollectionColor, CollectionColors } from '@/lib/constants';
import { CaretDownIcon, CaretUpIcon, TrashIcon } from '@radix-ui/react-icons';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import PlusIcon from './icons/PlusIcon';

interface Props {
  collection: Collection;
}

const tasks: string[] = ["Task 1", "Task 2"];

function CollectionCard({ collection }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn("flex w-full justify-between p-6",
          isOpen && "rounded-b-none",
          CollectionColors[collection.color as CollectionColor]
          )}
        >
          <span className='text-white font-bold'>
            {collection.name}
          </span>

          {!isOpen && <CaretDownIcon className='h-6 w-6' />}

          {isOpen && <CaretUpIcon className='h-6 w-6' />}

        </Button>
      </CollapsibleTrigger>

      <CollapsibleContent className='flex rounded-b-md flex-col dark:bg-neutral-900 shadow-lg'>
        {tasks.length === 0 && <div>No tasks</div>}

        {
          tasks.length > 0 && (
            <>
              <Progress className='rounded-none' value={45} />

              <div className="p-4 gap-3 flex flex-col">
                {tasks.map((task) => (
                  <div>Mocked task</div>
                ))}
              </div>
            </>
          )
        }

        <Separator />

        <footer className='h-[40px] px-4 p-[2px] text-xs text-neutral-500 flex justify-between items-center'>
          <p>
            Created at {collection.createdAt.toDateString()}
          </p>

          <div>
            <Button size={"icon"} variant={"ghost"}>
              <PlusIcon />
            </Button>

            <Button size={"icon"} variant={"ghost"}>
              <TrashIcon />
            </Button>
          </div>
        </footer>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CollectionCard
"use client";
import React from 'react';
import { Button } from './ui/button';

function CreateCollectionBtn() {
  return (
    <div className='w-full rounded bg-gradient-to-r from-pink-500 vai-red-500 to-yellow-500 p-[1px]'>
      <Button
        variant={"outline"}
        className='dark:text-white w-full dark:bg-neutral-950 bg-white'>
        <span className='bg-gradient-to-r from-red-500 to-orange-500 hover:to-orange-800 bg-clip-text text-transparent'>
          Create collection
        </span>
      </Button>
    </div>
  )
}

export default CreateCollectionBtn
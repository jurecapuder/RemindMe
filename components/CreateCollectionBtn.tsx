"use client";
import React from 'react';
import { Button } from './ui/button';

function CreateCollectionBtn() {
  return (
    <Button
      variant={"outline"}
      className='dark:text-white w-full dark:bg-neutral-950 bg-white'>
      <span className='bg-gradient-to-r from-red-500 to-orange-500 hover:to-orange-800 bg-clip-text text-transparent'>
        Create collection
      </span>
    </Button>
  )
}

export default CreateCollectionBtn
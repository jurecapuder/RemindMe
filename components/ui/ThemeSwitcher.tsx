"use client";

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './tabs';
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <Tabs defaultValue={theme}>
      <TabsList className='border dark:border-neutral-800 dark:bg-[#030303]'>
        <TabsTrigger value="light">
          <SunIcon />
        </TabsTrigger>

        <TabsTrigger value="dark">
          <MoonIcon />
        </TabsTrigger>

        <TabsTrigger value="system">
          <DesktopIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher
"use client";

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './tabs';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, []);

  return (
    <Tabs defaultValue={theme}>
      <TabsList>
        <TabsTrigger value="light"></TabsTrigger>
        <TabsTrigger value="dark"></TabsTrigger>
        <TabsTrigger value="system"></TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export interface Photo {
  id: number;
  url: string;
  caption: string;
  span?: string; // for grid layout e.g., 'col-span-2'
}

export interface Skill {
  name: string;
  icon: React.ElementType;
  category: 'code' | 'creative' | 'tools';
}
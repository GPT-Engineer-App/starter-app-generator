import React from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your Bare-Bones App</h1>
      <p className="text-lg text-center">
        This is a minimal web application with a simple layout and basic structure.
      </p>
      <Button variant="outline">Get Started</Button>
    </div>
  );
};

export default Index;
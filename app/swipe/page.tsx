"use client";

import React, { useState } from "react";
import { motion, PanInfo, useAnimation } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@tippsy/ui";
import { Button } from "@tippsy/ui";
import { H2, P } from "@tippsy/ui";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

// Mock profiles data
const PROFILES = [
  {
    id: "1",
    name: "Alex Chen",
    age: 28,
    bio: "Coffee enthusiast, hiking lover, and software engineer looking for meaningful connections.",
    interests: ["Coffee", "Hiking", "Movies", "Tech"],
    drinkPreferences: ["Craft Beer", "Cocktails", "Wine"],
    photos: ["/alex.jpg"]
  },
  {
    id: "2",
    name: "Jamie Taylor",
    age: 26,
    bio: "Adventurous spirit who loves trying new cocktail bars. Let's explore the city together!",
    interests: ["Travel", "Cooking", "Photography", "Music"],
    drinkPreferences: ["Cocktails", "Whiskey", "Champagne"],
    photos: ["/jamie.jpg"]
  },
  {
    id: "3",
    name: "Morgan Lee",
    age: 30,
    bio: "Foodie and wine connoisseur. Looking for someone to share tapas and conversations with.",
    interests: ["Fine Dining", "Wine Tasting", "Art", "Yoga"],
    drinkPreferences: ["Wine", "Gin", "Craft Beer"],
    photos: ["/morgan.jpg"]
  },
];

export default function SwipePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const controls = useAnimation();

  const currentProfile = PROFILES[currentIndex];

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100;
    
    if (info.offset.x > swipeThreshold) {
      handleSwipe("right");
    } else if (info.offset.x < -swipeThreshold) {
      handleSwipe("left");
    } else {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
    }
  };

  const handleSwipe = async (direction: string) => {
    setDirection(direction);
    
    await controls.start({
      x: direction === "right" ? 500 : -500,
      opacity: 0,
      transition: { duration: 0.3 }
    });
    
    // Go to the next profile or circle back
    const nextIndex = (currentIndex + 1) % PROFILES.length;
    setCurrentIndex(nextIndex);
    
    // Reset position for the next card
    await controls.start({ x: 0, opacity: 1, transition: { duration: 0 } });
  };

  const handleButtonSwipe = (direction: string) => {
    handleSwipe(direction);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Tippsy</Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 1 0-16 0" />
              </svg>
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <motion.div
          className="w-full max-w-md mx-auto"
          animate={controls}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          <Card className="h-[600px] overflow-hidden">
            <div 
              className="h-[400px] bg-cover bg-center relative" 
              style={{ 
                backgroundImage: `url(https://source.unsplash.com/random/400x400/?person)` 
              }}
            >
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <H2 className="text-white text-3xl font-bold mb-1">
                  {currentProfile.name}, {currentProfile.age}
                </H2>
                <P className="text-white opacity-80">
                  {currentProfile.interests.join(" • ")}
                </P>
              </div>
            </div>
            <CardContent className="p-6">
              <P>{currentProfile.bio}</P>
              
              <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">Drink Preferences</h3>
                <div className="flex flex-wrap gap-1">
                  {currentProfile.drinkPreferences.map((drink) => (
                    <span 
                      key={drink} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {drink}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="flex justify-center mt-6 gap-4">
          <Button
            variant="outline" 
            className="w-16 h-16 rounded-full bg-destructive/10 text-destructive border-destructive"
            onClick={() => handleButtonSwipe("left")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 16l-6-6 6-6" />
            </svg>
          </Button>
          
          <Button
            variant="outline" 
            className="w-16 h-16 rounded-full bg-primary/10 text-primary border-primary"
            onClick={() => handleButtonSwipe("right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </div>
      </main>
    </div>
  );
} 
"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@tippsy/ui";
import { Button } from "@tippsy/ui";
import { H1, H2, P } from "@tippsy/ui";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { getBarRecommendations } from "@tippsy/utils";
import { useRouter } from "next/navigation";

// Mock matched user data
const MATCHED_USER = {
  id: "2",
  name: "Jamie Taylor",
  age: 26,
  bio: "Adventurous spirit who loves trying new cocktail bars. Let's explore the city together!",
  interests: ["Travel", "Cooking", "Photography", "Music"],
  drinkPreferences: ["Cocktails", "Whiskey", "Champagne"],
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
  },
  photos: ["/jamie.jpg"]
};

// Mock current user data
const CURRENT_USER = {
  id: "1",
  name: "Alex Chen",
  age: 28,
  bio: "Coffee enthusiast, hiking lover, and software engineer looking for meaningful connections.",
  interests: ["Coffee", "Hiking", "Movies", "Tech"],
  drinkPreferences: ["Craft Beer", "Cocktails", "Wine"],
  location: {
    latitude: 40.7128,
    longitude: -74.0060,
  },
  photos: ["/alex.jpg"]
};

export default function BarsPage() {
  const router = useRouter();
  const bars = getBarRecommendations(CURRENT_USER, MATCHED_USER);

  const handleSelectBar = (barId: string) => {
    // In a real app, this would send a message to the matched user
    // For now, just redirect to the chat page
    router.push(`/chat/${MATCHED_USER.id}`);
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
      
      <main className="flex-1 p-4 max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <H1 className="text-3xl font-bold mb-2">It's a Match!</H1>
          <P className="text-muted-foreground">
            You and {MATCHED_USER.name} liked each other. Here are some bar recommendations for your first date!
          </P>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bars.map((bar) => (
            <Card key={bar.id} className="overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(https://source.unsplash.com/random/400x200/?bar)` 
                }}
              />
              <CardHeader className="pb-2">
                <CardTitle>{bar.name}</CardTitle>
                <CardDescription>{bar.address}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {Array.from({ length: Math.round(bar.rating) }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-sm text-muted-foreground">
                    {bar.rating.toFixed(1)}
                  </span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">
                    {"$".repeat(bar.priceLevel)}
                  </span>
                </div>
                
                <P className="text-sm line-clamp-2">{bar.description}</P>
                
                <div className="mt-2 flex flex-wrap gap-1">
                  {bar.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-2 text-sm">
                  <span className="font-medium">Hours: </span>
                  {bar.hours.open} - {bar.hours.close}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => handleSelectBar(bar.id)}
                >
                  Suggest This Bar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            variant="outline"
            onClick={() => router.push(`/chat/${MATCHED_USER.id}`)}
          >
            Skip and Chat Now
          </Button>
        </div>
      </main>
    </div>
  );
} 
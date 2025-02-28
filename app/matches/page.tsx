"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsDown, ThumbsUp, Coffee, MapPin, Heart, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

// Mock data for potential matches
const mockMatches = [
  {
    id: 1,
    name: 'Alex',
    age: 28,
    distance: '2 miles away',
    bio: 'Coffee enthusiast, hiking lover, and amateur chef. Looking for someone to share adventures with!',
    interests: ['Coffee', 'Hiking', 'Cooking', 'Travel'],
    image: 'https://i.pravatar.cc/400?img=1',
  },
  {
    id: 2,
    name: 'Jordan',
    age: 26,
    distance: '4 miles away',
    bio: 'Art lover, bookworm, and wine connoisseur. Let\'s discuss our favorite authors over a glass of red!',
    interests: ['Art', 'Reading', 'Wine', 'Museums'],
    image: 'https://i.pravatar.cc/400?img=2',
  },
  {
    id: 3,
    name: 'Taylor',
    age: 29,
    distance: '1 mile away',
    bio: 'Music producer by day, cocktail mixer by night. Always looking for new sounds and flavors!',
    interests: ['Music', 'Cocktails', 'Concerts', 'Nightlife'],
    image: 'https://i.pravatar.cc/400?img=3',
  },
  {
    id: 4,
    name: 'Casey',
    age: 27,
    distance: '3 miles away',
    bio: 'Fitness junkie and health food advocate. Let\'s go for a run and then grab some smoothies!',
    interests: ['Fitness', 'Nutrition', 'Running', 'Yoga'],
    image: 'https://i.pravatar.cc/400?img=4',
  },
];

export default function MatchesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<typeof mockMatches>([...mockMatches]);
  const [matchedUsers, setMatchedUsers] = useState<(typeof mockMatches)[0][]>([]);

  const currentMatch = matches[currentIndex];

  const handleSwipe = (liked: boolean) => {
    if (liked) {
      // In a real app, this would send a like to the backend
      toast.success(`You liked ${currentMatch.name}!`, {
        description: "We'll let them know you're interested!",
      });
      setMatchedUsers([...matchedUsers, currentMatch]);
    } else {
      toast.info(`You passed on ${currentMatch.name}`);
    }

    // Move to the next match
    if (currentIndex < matches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Reset when we reach the end
      toast("You've seen all potential matches!", {
        description: "Check back later for more.",
      });
      // For demo purposes, we'll reset
      setCurrentIndex(0);
    }
  };

  return (
    <div className="container max-w-md mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Find Your Match</h1>
      
      {currentMatch && (
        <div className="relative">
          <Card className="w-full overflow-hidden shadow-lg">
            <div className="relative h-96 bg-gray-200">
              <img 
                src={currentMatch.image} 
                alt={currentMatch.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h2 className="text-2xl font-bold">{currentMatch.name}, {currentMatch.age}</h2>
                <p className="flex items-center text-sm">
                  <MapPin className="mr-1 h-4 w-4" /> {currentMatch.distance}
                </p>
              </div>
            </div>
            
            <CardContent className="p-4">
              <p className="mb-4">{currentMatch.bio}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {currentMatch.interests.map((interest, i) => (
                    <Badge key={i} variant="secondary">{interest}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full w-16 h-16 border-destructive"
                  onClick={() => handleSwipe(false)}
                >
                  <X className="h-8 w-8 text-destructive" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full w-16 h-16 border-primary"
                  onClick={() => handleSwipe(true)}
                >
                  <Heart className="h-8 w-8 text-primary" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {matchedUsers.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Matches</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {matchedUsers.map((match) => (
              <div key={match.id} className="flex flex-col items-center">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage src={match.image} alt={match.name} />
                  <AvatarFallback>{match.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="text-sm mt-1">{match.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 
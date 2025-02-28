"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Coffee, Wine, Beer, MessageCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

// Mock data for matches and bars
const myMatches = [
  {
    id: 1,
    name: 'Alex',
    image: 'https://i.pravatar.cc/400?img=1',
    lastMessage: 'Looking forward to meeting you!',
    location: { lat: 40.7128, lng: -74.006 }, // NYC coordinates (simplified)
  },
  {
    id: 2,
    name: 'Jordan',
    image: 'https://i.pravatar.cc/400?img=2',
    lastMessage: 'Hey, where should we meet?',
    location: { lat: 40.7484, lng: -73.9857 }, // Slightly different NYC coordinates
  },
  {
    id: 3,
    name: 'Taylor',
    image: 'https://i.pravatar.cc/400?img=3',
    lastMessage: 'I know a great spot in Midtown!',
    location: { lat: 40.7549, lng: -73.9840 }, // Another NYC location
  },
];

const nearbyBars = [
  {
    id: 1,
    name: 'The Cozy Corner',
    image: '/images/bar1.jpg', // These would be real images in a production app
    rating: 4.5,
    reviewCount: 128,
    distance: '0.3 miles',
    address: '123 Main St, New York, NY',
    hours: '4PM - 2AM',
    type: 'Wine Bar',
    icon: Wine,
    location: { lat: 40.7300, lng: -73.9950 },
  },
  {
    id: 2,
    name: 'Brew & Bites',
    image: '/images/bar2.jpg',
    rating: 4.2,
    reviewCount: 95,
    distance: '0.5 miles',
    address: '456 Park Ave, New York, NY',
    hours: '3PM - 1AM',
    type: 'Craft Beer Bar',
    icon: Beer,
    location: { lat: 40.7350, lng: -74.0000 },
  },
  {
    id: 3,
    name: 'The Espresso Lounge',
    image: '/images/bar3.jpg',
    rating: 4.7,
    reviewCount: 156,
    distance: '0.7 miles',
    address: '789 Broadway, New York, NY',
    hours: '8AM - 11PM',
    type: 'Coffee & Wine Bar',
    icon: Coffee,
    location: { lat: 40.7320, lng: -73.9880 },
  },
];

// Simple function to calculate distance between two coordinates (Haversine formula)
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Function to find midpoint between two coordinates
function findMidpoint(lat1: number, lon1: number, lat2: number, lon2: number) {
  return {
    lat: (lat1 + lat2) / 2,
    lng: (lon1 + lon2) / 2
  };
}

export default function MeetingSpotPage() {
  const [selectedMatch, setSelectedMatch] = useState<typeof myMatches[0] | null>(null);
  const [suggestedBars, setSuggestedBars] = useState<typeof nearbyBars>([]);
  const [loading, setLoading] = useState(false);

  const handleFindBars = () => {
    if (!selectedMatch) {
      toast.error("Please select a match first!");
      return;
    }

    setLoading(true);

    // In a real app, this would make an API call to find bars between the users
    // For demo, we'll use our mock data and sort by a simulated "midpoint"
    
    // Simulate user's location (in a real app, this would use geolocation)
    const userLocation = { lat: 40.7300, lng: -74.0050 };
    
    // Find midpoint between user and match
    const midpoint = findMidpoint(
      userLocation.lat, 
      userLocation.lng, 
      selectedMatch.location.lat, 
      selectedMatch.location.lng
    );
    
    // Sort bars by distance to midpoint
    const sortedBars = [...nearbyBars].sort((a, b) => {
      const distA = calculateDistance(midpoint.lat, midpoint.lng, a.location.lat, a.location.lng);
      const distB = calculateDistance(midpoint.lat, midpoint.lng, b.location.lat, b.location.lng);
      return distA - distB;
    });
    
    // Simulate API delay
    setTimeout(() => {
      setSuggestedBars(sortedBars);
      setLoading(false);
      toast.success(`Found ${sortedBars.length} bars near you and ${selectedMatch.name}!`);
    }, 1500);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Find a Meeting Spot</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Your Matches</CardTitle>
              <CardDescription>Select someone to meet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {myMatches.map((match) => (
                <div 
                  key={match.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedMatch?.id === match.id 
                      ? 'bg-primary/10 border border-primary'
                      : 'hover:bg-accent'
                  }`}
                  onClick={() => setSelectedMatch(match)}
                >
                  <Avatar>
                    <AvatarImage src={match.image} alt={match.name} />
                    <AvatarFallback>{match.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{match.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{match.lastMessage}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={handleFindBars}
                disabled={!selectedMatch || loading}
              >
                {loading ? "Finding Bars..." : "Find Bars Nearby"}
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedMatch 
                  ? `Suggested Spots for You & ${selectedMatch.name}` 
                  : "Suggested Meeting Spots"}
              </CardTitle>
              <CardDescription>
                {selectedMatch 
                  ? "We found these bars at a convenient location for both of you"
                  : "Select a match to find bars"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : suggestedBars.length > 0 ? (
                <Tabs defaultValue="list" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="list">List View</TabsTrigger>
                    <TabsTrigger value="map">Map View</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="list" className="space-y-4 mt-4">
                    {suggestedBars.map((bar) => (
                      <Card key={bar.id}>
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative h-40 sm:h-auto sm:w-1/3 bg-muted">
                            <div className="w-full h-full flex items-center justify-center">
                              {/* In a real app, use next/image with actual images */}
                              <bar.icon className="w-12 h-12 text-muted-foreground" />
                            </div>
                            <Badge className="absolute top-2 right-2">
                              {bar.rating} <Star className="h-3 w-3 ml-1 fill-current" />
                            </Badge>
                          </div>
                          
                          <div className="p-4 flex-1">
                            <h3 className="font-semibold text-lg">{bar.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{bar.type}</p>
                            
                            <div className="space-y-1">
                              <div className="flex items-center text-sm">
                                <MapPin className="mr-1 h-4 w-4" /> 
                                <span>{bar.address}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <Clock className="mr-1 h-4 w-4" /> 
                                <span>{bar.hours}</span>
                              </div>
                            </div>
                            
                            <div className="mt-4 flex justify-between items-center">
                              <span className="text-sm font-medium">{bar.distance} away</span>
                              <Button size="sm">
                                <MessageCircle className="mr-1 h-4 w-4" />
                                Suggest
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="map">
                    <div className="bg-muted rounded-md h-[400px] flex items-center justify-center">
                      <p className="text-muted-foreground">
                        Map view would be implemented with Google Maps or similar API
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No bars selected yet</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Select a match and click "Find Bars Nearby" to see suggestions
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 
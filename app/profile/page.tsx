"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit, LogOut, MapPin, Settings, User } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    bio: "Coffee enthusiast, hiking lover, and amateur chef. Looking for someone to share adventures with!",
    location: "New York, NY",
    interests: ["Coffee", "Hiking", "Cooking", "Travel", "Photography", "Music"],
    image: "https://i.pravatar.cc/150?img=68",
    matches: 12,
    barVisits: 8,
  };

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Your Profile</h1>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <div className="grid gap-6 md:grid-cols-[250px_1fr]">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-sm text-muted-foreground flex items-center mt-1">
                  <MapPin className="h-3 w-3 mr-1" /> {user.location}
                </p>
                
                <div className="grid grid-cols-2 gap-4 w-full mt-6 text-center">
                  <div>
                    <p className="text-2xl font-bold">{user.matches}</p>
                    <p className="text-xs text-muted-foreground">Matches</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{user.barVisits}</p>
                    <p className="text-xs text-muted-foreground">Bar Visits</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{user.bio}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" /> Edit Bio
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Interests</CardTitle>
                  <CardDescription>What you enjoy doing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {user.interests.map((interest, i) => (
                      <Badge key={i} variant="secondary">{interest}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" /> Edit Interests
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Matching Preferences</CardTitle>
              <CardDescription>Customize who you want to match with</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Age Range</Label>
                <div className="flex items-center space-x-4">
                  <Input type="number" placeholder="Min" className="w-24" defaultValue={21} />
                  <span>to</span>
                  <Input type="number" placeholder="Max" className="w-24" defaultValue={35} />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Distance (miles)</Label>
                <Input type="number" placeholder="Maximum distance" className="w-24" defaultValue={25} />
              </div>
              
              <div className="space-y-2">
                <Label>I'm interested in</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Men</Badge>
                  <Badge className="cursor-pointer">Women</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Everyone</Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Bar Preferences</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Cocktail Bars</Badge>
                  <Badge className="cursor-pointer">Wine Bars</Badge>
                  <Badge className="cursor-pointer">Craft Beer</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Sports Bars</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Dive Bars</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value="********" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>App Settings</CardTitle>
                <CardDescription>Customize your app experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications about new matches and messages</p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="location">Location Services</Label>
                    <p className="text-sm text-muted-foreground">Allow the app to access your location</p>
                  </div>
                  <Switch id="location" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Theme</Label>
                    <p className="text-sm text-muted-foreground">Choose between light and dark mode</p>
                  </div>
                  <ModeToggle />
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Delete Account</p>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive" size="sm">Delete Account</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Log Out</p>
                    <p className="text-sm text-muted-foreground">Sign out of your account</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <LogOut className="h-4 w-4 mr-2" /> Log Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 
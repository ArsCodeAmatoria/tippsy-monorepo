"use client";

import Link from "next/link";
import { ArrowRight, Heart, MapPin, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="mb-6 transform scale-150 origin-left">
                  <Logo />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Your Perfect Match & The Perfect Bar
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Tippsy combines dating with discovering the best bars near you. 
                  Match with someone special, then find the perfect spot to meet.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/matches">
                  <Button size="lg" className="gap-1.5">
                    Start Matching
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/bars">
                  <Button size="lg" variant="outline">
                    Discover Bars
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex md:justify-center">
              <div className="relative h-[500px] w-[300px] overflow-hidden rounded-xl bg-muted/50 dark:bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform scale-[2.5]">
                    <Logo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 dark:bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">How Tippsy Works</h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-xl">
              We take the stress out of dating by helping you find both a match and the perfect meeting spot.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="bg-background">
              <CardHeader className="space-y-1 flex flex-row items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Match With Someone</CardTitle>
                  <CardDescription>
                    Swipe through profiles and match with people who share your interests.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Our advanced matching algorithm helps you find compatible people nearby who are looking for the same things you are.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader className="space-y-1 flex flex-row items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Find a Bar</CardTitle>
                  <CardDescription>
                    Discover the perfect spot that's convenient for both of you.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  We'll find bars at a convenient midpoint between you and your match, with options to fit any mood or preference.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader className="space-y-1 flex flex-row items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Meet Up</CardTitle>
                  <CardDescription>
                    Connect in person at your chosen spot with confidence.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Skip the awkward "where should we meet" conversation and jump straight to getting to know each other.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Ready to Meet Someone?</h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-xl">
              Join thousands of users who are already finding matches and great bars with Tippsy.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Link href="/matches">
                <Button size="lg" className="gap-1.5">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
/**
 * Matchmaking utility functions for Tippsy app
 */

export type UserProfile = {
  id: string;
  name: string;
  age: number;
  bio: string;
  photos: string[];
  interests: string[];
  drinkPreferences: string[];
  location: {
    latitude: number;
    longitude: number;
  };
};

export type BarRecommendation = {
  id: string;
  name: string;
  address: string;
  rating: number;
  priceLevel: 1 | 2 | 3 | 4;
  photoUrl: string;
  description: string;
  tags: string[];
  hours: {
    open: string;
    close: string;
  };
};

/**
 * Calculate match percentage between two users based on interests and drink preferences
 */
export function calculateMatchPercentage(user1: UserProfile, user2: UserProfile): number {
  // Common interests
  const commonInterests = user1.interests.filter(interest => 
    user2.interests.includes(interest)
  );
  
  // Common drink preferences
  const commonDrinkPrefs = user1.drinkPreferences.filter(pref => 
    user2.drinkPreferences.includes(pref)
  );
  
  // Calculate percentage based on weighted factors
  const interestWeight = 0.6;
  const drinkWeight = 0.4;
  
  const interestScore = commonInterests.length / Math.max(user1.interests.length, user2.interests.length);
  const drinkScore = commonDrinkPrefs.length / Math.max(user1.drinkPreferences.length, user2.drinkPreferences.length);
  
  return Math.round((interestScore * interestWeight + drinkScore * drinkWeight) * 100);
}

/**
 * Calculate distance between two locations using the Haversine formula
 */
export function calculateDistance(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

/**
 * Convert degrees to radians
 */
function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Get bar recommendations based on user profiles and their location
 */
export function getBarRecommendations(
  user1: UserProfile,
  user2: UserProfile
): BarRecommendation[] {
  // In a real app, this would query a bar database or API
  // For demo purposes, we'll return mock data
  
  return [
    {
      id: 'bar1',
      name: 'The Tipsy Alchemist',
      address: '123 Main St, New York, NY',
      rating: 4.5,
      priceLevel: 2,
      photoUrl: 'https://example.com/bar1.jpg',
      description: 'A cozy speakeasy with innovative cocktails and a romantic atmosphere.',
      tags: ['cocktails', 'speakeasy', 'intimate'],
      hours: {
        open: '5:00 PM',
        close: '2:00 AM',
      },
    },
    {
      id: 'bar2',
      name: 'Cloud Nine Lounge',
      address: '456 Broadway, New York, NY',
      rating: 4.8,
      priceLevel: 3,
      photoUrl: 'https://example.com/bar2.jpg',
      description: 'Rooftop bar with stunning views and an extensive wine list.',
      tags: ['rooftop', 'wine', 'views'],
      hours: {
        open: '4:00 PM',
        close: '1:00 AM',
      },
    },
    {
      id: 'bar3',
      name: 'Hops & Barley',
      address: '789 Park Ave, New York, NY',
      rating: 4.2,
      priceLevel: 2,
      photoUrl: 'https://example.com/bar3.jpg',
      description: 'Craft beer haven with a lively atmosphere and games.',
      tags: ['beer', 'games', 'casual'],
      hours: {
        open: '3:00 PM',
        close: '12:00 AM',
      },
    },
  ];
} 
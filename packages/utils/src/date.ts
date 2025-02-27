/**
 * Date formatting utilities for Tippsy app
 */

/**
 * Format a date to a readable string (e.g., "Today", "Yesterday", or "MM/DD/YYYY")
 */
export function formatDate(date: Date): string {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  const dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  if (dateWithoutTime.getTime() === today.getTime()) {
    return 'Today';
  } else if (dateWithoutTime.getTime() === yesterday.getTime()) {
    return 'Yesterday';
  } else {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
}

/**
 * Format a time to a readable string (e.g., "3:30 PM")
 */
export function formatTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  
  return `${hours}:${minutesStr} ${ampm}`;
}

/**
 * Get a relative time string (e.g., "2 hours ago", "5 minutes ago")
 */
export function getRelativeTimeString(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  
  const diffInSecs = Math.floor(diffInMs / 1000);
  const diffInMins = Math.floor(diffInSecs / 60);
  const diffInHours = Math.floor(diffInMins / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInSecs < 60) {
    return `${diffInSecs} second${diffInSecs !== 1 ? 's' : ''} ago`;
  } else if (diffInMins < 60) {
    return `${diffInMins} minute${diffInMins !== 1 ? 's' : ''} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
  } else {
    return formatDate(date);
  }
} 
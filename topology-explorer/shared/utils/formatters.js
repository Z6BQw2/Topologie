/**
 * Shared formatter utilities for consistent data presentation across the application
 */

// Format a date to a human-readable string (e.g., "January 1, 2023")
export const formatDateFull = (dateInput) => {
  if (!dateInput) return '';
  
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  
  if (!(date instanceof Date) || isNaN(date)) {
    return 'Invalid date';
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Format a date in a shorter format (e.g., "Jan 1, 2023")
export const formatDateShort = (dateInput) => {
  if (!dateInput) return '';
  
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  
  if (!(date instanceof Date) || isNaN(date)) {
    return 'Invalid date';
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Format a date with time (e.g., "Jan 1, 2023, 12:00 PM")
export const formatDateTime = (dateInput) => {
  if (!dateInput) return '';
  
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  
  if (!(date instanceof Date) || isNaN(date)) {
    return 'Invalid date';
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Format time elapsed since a given date (e.g., "2 hours ago", "3 days ago")
export const formatTimeAgo = (dateInput) => {
  if (!dateInput) return '';
  
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  
  if (!(date instanceof Date) || isNaN(date)) {
    return 'Invalid date';
  }
  
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);
  
  if (diffSec < 60) {
    return diffSec === 1 ? '1 second ago' : `${diffSec} seconds ago`;
  } else if (diffMin < 60) {
    return diffMin === 1 ? '1 minute ago' : `${diffMin} minutes ago`;
  } else if (diffHour < 24) {
    return diffHour === 1 ? '1 hour ago' : `${diffHour} hours ago`;
  } else if (diffDay < 30) {
    return diffDay === 1 ? '1 day ago' : `${diffDay} days ago`;
  } else if (diffMonth < 12) {
    return diffMonth === 1 ? '1 month ago' : `${diffMonth} months ago`;
  } else {
    return diffYear === 1 ? '1 year ago' : `${diffYear} years ago`;
  }
};

// Format a number with commas (e.g., 1,234,567)
export const formatNumber = (number) => {
  if (typeof number !== 'number' || isNaN(number)) {
    return '0';
  }
  
  return number.toLocaleString('en-US');
};

// Format a decimal number with fixed precision
export const formatDecimal = (number, decimals = 2) => {
  if (typeof number !== 'number' || isNaN(number)) {
    return '0.00';
  }
  
  return number.toFixed(decimals);
};

// Format a percentage
export const formatPercentage = (value, decimals = 1) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0%';
  }
  
  return `${(value * 100).toFixed(decimals)}%`;
};

// Format a duration in seconds to a human-readable string (e.g., "2h 30m")
export const formatDuration = (seconds) => {
  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
    return '0s';
  }
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  
  let result = '';
  
  if (hours > 0) {
    result += `${hours}h `;
  }
  
  if (minutes > 0 || hours > 0) {
    result += `${minutes}m `;
  }
  
  if (remainingSeconds > 0 || (hours === 0 && minutes === 0)) {
    result += `${remainingSeconds}s`;
  }
  
  return result.trim();
};

// Format file size in bytes to human-readable format
export const formatFileSize = (bytes) => {
  if (typeof bytes !== 'number' || isNaN(bytes) || bytes < 0) {
    return '0 Bytes';
  }
  
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
};

// Format a mathematical set notation
export const formatSet = (elements) => {
  if (!Array.isArray(elements)) {
    return '∅';
  }
  
  if (elements.length === 0) {
    return '∅';
  }
  
  return `{${elements.join(', ')}}`;
};

// Format a mathematical function notation
export const formatFunction = (name, domain, codomain) => {
  return `${name}: ${domain} → ${codomain}`;
};

// Format a LaTeX mathematical expression for display
export const formatMathLatex = (expression) => {
  if (typeof expression !== 'string') {
    return '';
  }
  
  // Double dollar signs for displayed equation
  return `$$${expression}$$`;
};

// Format a LaTeX mathematical expression inline
export const formatMathLatexInline = (expression) => {
  if (typeof expression !== 'string') {
    return '';
  }
  
  // Single dollar signs for inline equation
  return `$${expression}$`;
};

// Format user profile name
export const formatUserName = (user) => {
  if (!user) return 'Unknown User';
  
  if (user.displayName) return user.displayName;
  if (user.firstName && user.lastName) return `${user.firstName} ${user.lastName}`;
  if (user.firstName) return user.firstName;
  if (user.username) return user.username;
  
  return 'Anonymous User';
};

// Format achievement unlocked message
export const formatAchievementUnlocked = (achievement) => {
  if (!achievement) return '';
  
  return `Achievement Unlocked: ${achievement.name}`;
};

// Format score with suffix based on score
export const formatScore = (score) => {
  if (typeof score !== 'number' || isNaN(score)) {
    return '0 points';
  }
  
  const formattedNumber = formatNumber(score);
  return `${formattedNumber} ${score === 1 ? 'point' : 'points'}`;
};

export default {
  formatDateFull,
  formatDateShort,
  formatDateTime,
  formatTimeAgo,
  formatNumber,
  formatDecimal,
  formatPercentage,
  formatDuration,
  formatFileSize,
  formatSet,
  formatFunction,
  formatMathLatex,
  formatMathLatexInline,
  formatUserName,
  formatAchievementUnlocked,
  formatScore
};

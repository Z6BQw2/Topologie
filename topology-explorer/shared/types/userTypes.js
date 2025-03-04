/**
 * Type definitions for user-related data structures
 * Using JSDoc for type documentation - these can be replaced with TypeScript types if desired
 */

/**
 * @typedef {Object} UserRole
 * @property {string} id - Unique identifier for the role
 * @property {string} name - Display name of the role
 * @property {string[]} permissions - Array of permission codes granted by this role
 */

/**
 * @typedef {Object} UserPreferences
 * @property {string} theme - UI theme preference ('light', 'dark', 'system')
 * @property {string} language - Language preference (ISO code)
 * @property {boolean} showHints - Whether to show hints for exercises by default
 * @property {boolean} enableNotifications - Whether notifications are enabled
 * @property {boolean} enableSounds - Whether sound effects are enabled
 * @property {string} difficultyPreference - Preferred exercise difficulty level
 * @property {boolean} showProgressDetails - Whether to show detailed progress stats
 */

/**
 * @typedef {Object} UserAchievement
 * @property {string} id - Achievement ID
 * @property {string} achievedAt - ISO date string when achievement was unlocked
 * @property {number} progress - For multi-stage achievements, percentage complete (0-100)
 * @property {boolean} isHidden - Whether this achievement is hidden from the user
 */

/**
 * @typedef {Object} UserProgress
 * @property {string} userId - User ID
 * @property {Object.<string, boolean>} modulesCompleted - Key-value of module IDs and completion status
 * @property {Object.<string, number>} exerciseScores - Key-value of exercise IDs and scores (0-100)
 * @property {Object.<string, string>} lastVisited - Key-value of content IDs and ISO date strings
 * @property {number} totalPoints - Accumulated points from all activities
 * @property {number} totalTimeSpent - Total time spent in minutes
 * @property {Object.<string, number>} categoryProgress - Key-value of category IDs and progress (0-100)
 * @property {UserAchievement[]} achievements - Achievements earned by the user
 * @property {string[]} completedChallenges - IDs of completed challenges
 */

/**
 * @typedef {Object} UserStats
 * @property {number} correctExercises - Number of correctly solved exercises
 * @property {number} totalExercisesAttempted - Total number of exercises attempted
 * @property {number} perfectScoreCount - Number of exercises solved with a perfect score
 * @property {number} currentStreak - Current streak of consecutive days active
 * @property {number} longestStreak - Longest streak of consecutive days active
 * @property {string} mostRecentActivity - ISO date string of most recent activity
 * @property {Object.<string, number>} categoryScores - Key-value of category IDs and average scores
 * @property {number} averageScore - Average score across all exercises
 * @property {number} averageAttempts - Average attempts per exercise
 */

/**
 * @typedef {Object} UserActivity
 * @property {string} id - Activity ID
 * @property {string} userId - User ID
 * @property {string} type - Activity type (e.g., 'exercise_completed', 'lesson_viewed')
 * @property {string} contentId - ID of the content item involved
 * @property {string} timestamp - ISO date string when the activity occurred
 * @property {number} score - Score earned (if applicable)
 * @property {number} timeSpent - Time spent in seconds (if applicable)
 * @property {Object} metadata - Additional activity-specific data
 */

/**
 * @typedef {Object} User
 * @property {string} id - Unique identifier for the user
 * @property {string} username - User's chosen username
 * @property {string} email - User's email address
 * @property {string} firstName - User's first name (optional)
 * @property {string} lastName - User's last name (optional)
 * @property {string} displayName - User's display name (defaults to username)
 * @property {string} avatar - URL to user's avatar image
 * @property {string} createdAt - ISO date string of account creation
 * @property {string} lastLoginAt - ISO date string of last login
 * @property {string[]} roles - Array of role IDs assigned to the user
 * @property {UserPreferences} preferences - User preferences
 * @property {UserProgress} progress - User learning progress
 * @property {UserStats} stats - User statistics
 * @property {UserActivity[]} recentActivity - Recent user activities
 */

/**
 * @typedef {Object} UserSession
 * @property {string} id - Session ID
 * @property {string} userId - User ID
 * @property {string} token - Authentication token
 * @property {string} createdAt - ISO date string when session was created
 * @property {string} expiresAt - ISO date string when session expires
 * @property {string} ipAddress - IP address used for session
 * @property {string} userAgent - User agent string
 * @property {boolean} isActive - Whether the session is active
 */

/**
 * @typedef {Object} UserNotification
 * @property {string} id - Notification ID
 * @property {string} userId - User ID
 * @property {string} type - Notification type
 * @property {string} title - Notification title
 * @property {string} message - Notification message
 * @property {string} createdAt - ISO date string when notification was created
 * @property {boolean} isRead - Whether the notification has been read
 * @property {string} [actionUrl] - URL to navigate to when clicked (optional)
 * @property {string} [imageUrl] - URL to an image for the notification (optional)
 */

/**
 * @typedef {Object} UserConnection
 * @property {string} userId - User ID
 * @property {string} provider - Authentication provider (e.g., 'google', 'github')
 * @property {string} providerUserId - User ID from the provider
 * @property {string} createdAt - ISO date string when the connection was created
 * @property {string} lastUsedAt - ISO date string when the connection was last used
 * @property {Object} profile - Provider-specific profile data
 */

// No actual export since this is just for documentation purposes
// If using TypeScript, these would be proper interfaces with exports

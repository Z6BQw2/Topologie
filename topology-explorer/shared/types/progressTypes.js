/**
 * Type definitions for learning progress and tracking
 * Using JSDoc for type documentation - these can be replaced with TypeScript types if desired
 */

/**
 * @typedef {Object} UserModuleProgress
 * @property {string} userId - ID of the user
 * @property {string} moduleId - ID of the module
 * @property {number} percentComplete - Percentage of completion (0-100)
 * @property {string} status - Current status ('not_started', 'in_progress', 'completed')
 * @property {string} startedAt - ISO date string when module was started
 * @property {string} completedAt - ISO date string when module was completed (if applicable)
 * @property {number} timeSpent - Total time spent in minutes
 * @property {string} lastActivityAt - ISO date string of last activity in this module
 * @property {Object.<string, boolean>} lessonsCompleted - Key-value of lesson IDs and completion status
 * @property {Object.<string, number>} exerciseScores - Key-value of exercise IDs and scores
 * @property {Object.<string, number>} conceptMastery - Key-value of concept IDs and mastery level (0-100)
 */

/**
 * @typedef {Object} UserLessonProgress
 * @property {string} userId - ID of the user
 * @property {string} lessonId - ID of the lesson
 * @property {string} moduleId - ID of the parent module
 * @property {number} percentComplete - Percentage of completion (0-100)
 * @property {string} status - Current status ('not_started', 'in_progress', 'completed')
 * @property {string} startedAt - ISO date string when lesson was started
 * @property {string} completedAt - ISO date string when lesson was completed (if applicable)
 * @property {number} timeSpent - Total time spent in minutes
 * @property {string} lastActivityAt - ISO date string of last activity in this lesson
 * @property {Object.<string, boolean>} sectionsCompleted - Key-value of section IDs and completion status
 * @property {string[]} resourcesViewed - IDs of resources that have been viewed
 */

/**
 * @typedef {Object} UserExerciseProgress
 * @property {string} userId - ID of the user
 * @property {string} exerciseId - ID of the exercise
 * @property {string} moduleId - ID of the parent module
 * @property {string} status - Current status ('not_attempted', 'in_progress', 'completed')
 * @property {number} highestScore - Highest score achieved (0-100)
 * @property {number} attempts - Number of attempts made
 * @property {string} lastAttemptAt - ISO date string of last attempt
 * @property {number} timeSpent - Total time spent in seconds
 * @property {string[]} hintsUsed - IDs of hints that have been used
 * @property {boolean} solutionViewed - Whether the solution has been viewed
 * @property {Object} lastSubmission - Data from the last submission
 */

/**
 * @typedef {Object} UserConceptMastery
 * @property {string} userId - ID of the user
 * @property {string} conceptId - ID of the concept
 * @property {number} masteryLevel - Mastery level (0-100)
 * @property {number} exposureCount - Number of times the user has encountered this concept
 * @property {number} correctApplications - Number of times the user has correctly applied this concept
 * @property {number} incorrectApplications - Number of times the user has incorrectly applied this concept
 * @property {string} lastEncounteredAt - ISO date string when the concept was last encountered
 * @property {Object.<string, number>} relatedConceptMastery - Key-value of related concept IDs and mastery levels
 */

/**
 * @typedef {Object} LearningPathProgress
 * @property {string} userId - ID of the user
 * @property {string} pathId - ID of the learning path
 * @property {number} percentComplete - Percentage of completion (0-100)
 * @property {string} status - Current status ('not_started', 'in_progress', 'completed')
 * @property {string} startedAt - ISO date string when path was started
 * @property {string} completedAt - ISO date string when path was completed (if applicable)
 * @property {number} timeSpent - Total time spent in hours
 * @property {string} lastActivityAt - ISO date string of last activity in this path
 * @property {Object.<string, boolean>} modulesCompleted - Key-value of module IDs and completion status
 * @property {Object.<string, number>} moduleProgress - Key-value of module IDs and completion percentages
 * @property {Object} milestones - Milestones achieved in this path
 */

/**
 * @typedef {Object} UserChallengeProgress
 * @property {string} userId - ID of the user
 * @property {string} challengeId - ID of the challenge
 * @property {number} percentComplete - Percentage of completion (0-100)
 * @property {string} status - Current status ('not_started', 'in_progress', 'completed')
 * @property {string} startedAt - ISO date string when challenge was started
 * @property {string} completedAt - ISO date string when challenge was completed (if applicable)
 * @property {number} timeSpent - Total time spent in minutes
 * @property {number} score - Total score earned
 * @property {Object.<string, boolean>} exercisesCompleted - Key-value of exercise IDs and completion status
 * @property {Object.<string, number>} exerciseScores - Key-value of exercise IDs and scores
 */

/**
 * @typedef {Object} UserActiveLearningData
 * @property {string} userId - ID of the user
 * @property {Object.<string, number>} conceptDifficulties - Key-value of concept IDs and user-specific difficulty ratings
 * @property {Object.<string, number>} learningRates - Key-value of concept IDs and learning rates
 * @property {Object.<string, string>} preferredFormats - Key-value of concept IDs and preferred learning formats
 * @property {Object.<string, number>} retentionRates - Key-value of concept IDs and retention rates
 * @property {Object.<string, string[]>} misconceptions - Key-value of concept IDs and identified misconceptions
 * @property {Object} recommendationData - Data used for generating recommendations
 */

/**
 * @typedef {Object} UserStreak
 * @property {string} userId - ID of the user
 * @property {number} currentStreak - Current consecutive days active
 * @property {number} longestStreak - Longest consecutive days active
 * @property {string[]} activeDates - Array of ISO date strings of active days
 * @property {string} lastActiveDate - ISO date string of last active day
 * @property {Object} streakHistory - History of streaks
 * @property {Object} rewards - Rewards earned from streaks
 */

/**
 * @typedef {Object} UserBadge
 * @property {string} userId - ID of the user
 * @property {string} badgeId - ID of the badge
 * @property {string} earnedAt - ISO date string when badge was earned
 * @property {string} category - Badge category
 * @property {number} level - Badge level (1, 2, 3, etc.)
 * @property {Object} metadata - Additional badge-specific data
 */

/**
 * @typedef {Object} ProgressSnapshot
 * @property {string} userId - ID of the user
 * @property {string} timestamp - ISO date string of when the snapshot was taken
 * @property {number} totalCompletion - Overall completion percentage (0-100)
 * @property {Object.<string, number>} moduleCompletions - Key-value of module IDs and completion percentages
 * @property {Object.<string, number>} conceptMasteries - Key-value of concept IDs and mastery levels
 * @property {number} totalExercisesCompleted - Total number of exercises completed
 * @property {number} averageScore - Average score across all exercises
 * @property {Object} metrics - Additional progress metrics
 */

/**
 * @typedef {Object} LearningRecommendation
 * @property {string} userId - ID of the user
 * @property {string} type - Recommendation type ('module', 'lesson', 'exercise', 'concept', 'challenge')
 * @property {string} itemId - ID of the recommended item
 * @property {string} reason - Reason for the recommendation
 * @property {number} priority - Priority level (1-10, with 10 being highest)
 * @property {string} generatedAt - ISO date string when recommendation was generated
 * @property {string} expiresAt - ISO date string when recommendation expires
 * @property {boolean} isCompleted - Whether the recommendation has been completed
 * @property {Object} metadata - Additional recommendation-specific data
 */

/**
 * @typedef {Object} StudySession
 * @property {string} userId - ID of the user
 * @property {string} sessionId - Unique identifier for the session
 * @property {string} startedAt - ISO date string when session started
 * @property {string} endedAt - ISO date string when session ended
 * @property {number} duration - Duration in minutes
 * @property {string[]} contentIds - IDs of content items engaged with
 * @property {Object.<string, number>} timeSpentByContent - Key-value of content IDs and time spent in minutes
 * @property {number} exercisesCompleted - Number of exercises completed
 * @property {number} averageScore - Average score across exercises in this session
 * @property {Object} metrics - Additional session-specific metrics
 */

// No actual export since this is just for documentation purposes
// If using TypeScript, these would be proper interfaces with exports

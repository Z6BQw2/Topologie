/**
 * Type definitions for exercises and exercise-related data structures
 * Using JSDoc for type documentation - these can be replaced with TypeScript types if desired
 */

/**
 * @typedef {Object} ExerciseSubmission
 * @property {string} id - Unique identifier for the submission
 * @property {string} exerciseId - ID of the exercise
 * @property {string} userId - ID of the user who made the submission
 * @property {Object} answer - The user's answer (format depends on exercise type)
 * @property {boolean} isCorrect - Whether the submission is correct
 * @property {number} score - Score for the submission (0-100)
 * @property {string[]} usedHintIds - IDs of hints used during the exercise
 * @property {number} attemptNumber - Which attempt this is (1, 2, 3, etc.)
 * @property {number} timeSpent - Time spent on the exercise in seconds
 * @property {string} submittedAt - ISO date string of submission time
 * @property {Object} feedback - Feedback for the submission
 */

/**
 * @typedef {Object} ExerciseFeedback
 * @property {boolean} isCorrect - Whether the answer is correct
 * @property {string} message - General feedback message
 * @property {ExercisePartFeedback[]} parts - Feedback for individual parts (for multi-part exercises)
 * @property {string[]} correctParts - IDs of correctly answered parts
 * @property {string[]} incorrectParts - IDs of incorrectly answered parts
 * @property {Object} hints - Hints related to the mistakes made
 * @property {Object} solution - Solution information (if revealed)
 */

/**
 * @typedef {Object} ExercisePartFeedback
 * @property {string} partId - ID of the exercise part
 * @property {boolean} isCorrect - Whether this part is correct
 * @property {string} message - Feedback message for this part
 * @property {number} score - Score for this part (0-100)
 * @property {Object} details - Additional part-specific feedback details
 */

/**
 * @typedef {Object} MultipleChoiceAnswer
 * @property {string[]} selectedOptionIds - IDs of the selected options
 */

/**
 * @typedef {Object} DragDropAnswer
 * @property {Object.<string, string>} placements - Map of draggable item IDs to drop zone IDs
 */

/**
 * @typedef {Object} GraphManipulationAnswer
 * @property {Object} nodes - Nodes in the submitted graph
 * @property {Object} edges - Edges in the submitted graph
 * @property {Object} properties - Additional graph properties
 */

/**
 * @typedef {Object} ProofBuilderAnswer
 * @property {Object[]} steps - Proof steps in order
 * @property {string} steps[].statement - The statement for this step
 * @property {string} steps[].rule - The rule applied for this step
 * @property {string[]} steps[].references - References to previous steps
 */

/**
 * @typedef {Object} CodeCompletionAnswer
 * @property {string} code - The submitted code
 * @property {Object} variables - State of variables after execution
 * @property {string[]} outputs - Output produced by the code
 */

/**
 * @typedef {Object} MathExpressionAnswer
 * @property {string} expression - The submitted mathematical expression
 * @property {Object} parsed - Parsed representation of the expression
 */

/**
 * @typedef {Object} ShortAnswerAnswer
 * @property {string} text - The submitted text answer
 */

/**
 * @typedef {Object} ExerciseStats
 * @property {string} exerciseId - ID of the exercise
 * @property {number} totalAttempts - Total number of attempts across all users
 * @property {number} correctAttempts - Number of correct attempts
 * @property {number} averageScore - Average score (0-100)
 * @property {number} averageTimeSpent - Average time spent in seconds
 * @property {number} averageAttempts - Average number of attempts per user
 * @property {number} difficultyRating - Calculated difficulty rating (0-100)
 * @property {Object.<string, number>} distributionByScore - Distribution of scores
 * @property {Object.<string, number>} hintUsage - Usage statistics for each hint
 * @property {Object} metadata - Additional exercise-specific statistics
 */

/**
 * @typedef {Object} ExerciseValidationResult
 * @property {boolean} isValid - Whether the answer is valid (not necessarily correct)
 * @property {string[]} errors - Validation error messages
 * @property {Object} details - Additional validation details
 */

/**
 * @typedef {Object} ExerciseEvaluationResult
 * @property {boolean} isCorrect - Whether the answer is correct
 * @property {number} score - Score for the answer (0-100)
 * @property {ExerciseFeedback} feedback - Feedback for the answer
 * @property {Object} details - Additional evaluation details
 */

/**
 * @typedef {Object} ExerciseGeneration
 * @property {string} exerciseType - Type of exercise to generate
 * @property {string} difficulty - Difficulty level
 * @property {string[]} conceptIds - IDs of concepts to cover
 * @property {Object} parameters - Type-specific generation parameters
 */

/**
 * @typedef {Object} MetricSpaceExerciseParameters
 * @property {number} dimension - Dimension of the space
 * @property {string} metricType - Type of metric to use
 * @property {boolean} includeProofTask - Whether to include a proof task
 * @property {string[]} properties - Properties to test (open sets, closed sets, etc.)
 */

/**
 * @typedef {Object} ContinuityExerciseParameters
 * @property {string} functionType - Type of function to use
 * @property {string[]} domains - Domains to consider
 * @property {boolean} includeEpsilonDelta - Whether to include epsilon-delta tasks
 * @property {string[]} properties - Properties to test
 */

/**
 * @typedef {Object} CompactnessExerciseParameters
 * @property {string} spaceType - Type of space to use
 * @property {string[]} characterizations - Compactness characterizations to test
 * @property {boolean} includeSequences - Whether to include sequence tasks
 * @property {boolean} includeCoverings - Whether to include covering tasks
 */

/**
 * @typedef {Object} ConnectednessExerciseParameters
 * @property {string} spaceType - Type of space to use
 * @property {boolean} includePathConnectedness - Whether to include path-connectedness
 * @property {boolean} includeComponents - Whether to include component identification
 * @property {string[]} properties - Properties to test
 */

// No actual export since this is just for documentation purposes
// If using TypeScript, these would be proper interfaces with exports

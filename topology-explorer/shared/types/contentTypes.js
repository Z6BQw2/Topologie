/**
 * Type definitions for educational content structures
 * Using JSDoc for type documentation - these can be replaced with TypeScript types if desired
 */

/**
 * @typedef {Object} LearningPath
 * @property {string} id - Unique identifier for the learning path
 * @property {string} title - Title of the learning path
 * @property {string} description - Description of the learning path
 * @property {string} difficulty - Difficulty level ('beginner', 'intermediate', 'advanced')
 * @property {string} imageUrl - URL to the path's image
 * @property {number} estimatedHours - Estimated completion time in hours
 * @property {string[]} moduleIds - Ordered array of module IDs in this path
 * @property {Object} requirements - Prerequisites for this path
 * @property {string[]} tags - Categorization tags
 * @property {string} createdAt - ISO date string of creation time
 * @property {string} updatedAt - ISO date string of last update time
 */

/**
 * @typedef {Object} Module
 * @property {string} id - Unique identifier for the module
 * @property {string} title - Title of the module
 * @property {string} shortDescription - Brief description
 * @property {string} fullDescription - Complete description
 * @property {string} imageUrl - URL to the module's image
 * @property {string} difficulty - Difficulty level ('beginner', 'intermediate', 'advanced')
 * @property {number} order - Order in the learning path
 * @property {string[]} lessonIds - Ordered array of lesson IDs in this module
 * @property {string[]} exerciseIds - Associated exercise IDs
 * @property {string[]} conceptIds - Associated concept IDs
 * @property {Object} unlockCriteria - Criteria to unlock this module
 * @property {Object} completionCriteria - Criteria to consider this module complete
 * @property {string[]} tags - Categorization tags
 * @property {string} createdAt - ISO date string of creation time
 * @property {string} updatedAt - ISO date string of last update time
 */

/**
 * @typedef {Object} Lesson
 * @property {string} id - Unique identifier for the lesson
 * @property {string} title - Title of the lesson
 * @property {string} moduleId - ID of the parent module
 * @property {number} order - Order within the module
 * @property {string} content - Lesson content in Markdown format
 * @property {string} difficulty - Difficulty level
 * @property {LessonSection[]} sections - Sections within the lesson
 * @property {string[]} visualizationIds - IDs of visualizations used in the lesson
 * @property {string[]} exerciseIds - IDs of exercises related to the lesson
 * @property {LessonResource[]} resources - Additional learning resources
 * @property {string[]} tags - Categorization tags
 * @property {number} estimatedMinutes - Estimated completion time in minutes
 * @property {string} createdAt - ISO date string of creation time
 * @property {string} updatedAt - ISO date string of last update time
 */

/**
 * @typedef {Object} LessonSection
 * @property {string} id - Unique identifier for the section
 * @property {string} title - Section title
 * @property {string} content - Section content in Markdown format
 * @property {('text'|'visualization'|'exercise'|'quiz'|'example'|'note')} type - Section type
 * @property {Object} metadata - Type-specific metadata
 */

/**
 * @typedef {Object} LessonResource
 * @property {string} title - Resource title
 * @property {string} description - Resource description
 * @property {string} url - URL to the resource
 * @property {('article'|'video'|'book'|'paper'|'website'|'tool')} type - Resource type
 * @property {boolean} isRequired - Whether the resource is required or optional
 */

/**
 * @typedef {Object} Concept
 * @property {string} id - Unique identifier for the concept
 * @property {string} name - Name of the concept
 * @property {string} definition - Short definition of the concept
 * @property {string} explanation - Longer explanation in Markdown format
 * @property {string[]} relatedConceptIds - IDs of related concepts
 * @property {string[]} examples - Examples illustrating the concept
 * @property {string[]} visualizationIds - IDs of visualizations for this concept
 * @property {string[]} exerciseIds - IDs of exercises testing this concept
 * @property {string[]} tags - Categorization tags
 * @property {Object} metadata - Additional concept-specific data
 */

/**
 * @typedef {Object} Visualization
 * @property {string} id - Unique identifier for the visualization
 * @property {string} title - Title of the visualization
 * @property {string} description - Description of the visualization
 * @property {('2d'|'3d'|'interactive'|'animation'|'simulation')} type - Visualization type
 * @property {string} component - React component name to render this visualization
 * @property {Object} config - Configuration parameters for the visualization
 * @property {string[]} conceptIds - Concepts illustrated by this visualization
 * @property {string[]} tags - Categorization tags
 * @property {boolean} isInteractive - Whether the visualization is interactive
 */

/**
 * @typedef {Object} Exercise
 * @property {string} id - Unique identifier for the exercise
 * @property {string} title - Title of the exercise
 * @property {string} moduleId - ID of the parent module
 * @property {string} difficulty - Difficulty level
 * @property {string} type - Exercise type (multiple_choice, drag_drop, etc.)
 * @property {string} instructions - Exercise instructions in Markdown format
 * @property {Object} content - Type-specific content data
 * @property {Object} solution - Solution data
 * @property {string[]} hintIds - Ordered array of hint IDs
 * @property {Object} metadata - Additional exercise-specific data
 * @property {string[]} conceptIds - Concepts tested by this exercise
 * @property {string[]} tags - Categorization tags
 * @property {number} points - Points awarded for completing the exercise
 * @property {string} createdAt - ISO date string of creation time
 * @property {string} updatedAt - ISO date string of last update time
 */

/**
 * @typedef {Object} MultipleChoiceExercise
 * @extends Exercise
 * @property {Object} content - Content specific to multiple choice exercises
 * @property {string} content.question - The question text
 * @property {Object[]} content.options - Array of answer options
 * @property {string} content.options[].id - Option ID
 * @property {string} content.options[].text - Option text
 * @property {boolean} content.options[].isCorrect - Whether this option is correct
 * @property {string} content.options[].explanation - Explanation for this option
 * @property {boolean} content.multipleCorrect - Whether multiple options can be correct
 */

/**
 * @typedef {Object} DragDropExercise
 * @extends Exercise
 * @property {Object} content - Content specific to drag and drop exercises
 * @property {Object[]} content.draggableItems - Array of draggable items
 * @property {string} content.draggableItems[].id - Item ID
 * @property {string} content.draggableItems[].content - Item content
 * @property {string} content.draggableItems[].type - Item type
 * @property {Object[]} content.dropZones - Array of drop zones
 * @property {string} content.dropZones[].id - Drop zone ID
 * @property {string} content.dropZones[].label - Drop zone label
 * @property {string[]} content.dropZones[].acceptedItemIds - IDs of items accepted by this zone
 */

/**
 * @typedef {Object} GraphManipulationExercise
 * @extends Exercise
 * @property {Object} content - Content specific to graph manipulation exercises
 * @property {Object} content.initialGraph - Initial graph state
 * @property {string} content.task - Description of the manipulation task
 * @property {Object} content.expectedResult - Expected final graph state
 * @property {string[]} content.availableOperations - Operations allowed (add_node, add_edge, etc.)
 */

/**
 * @typedef {Object} Hint
 * @property {string} id - Unique identifier for the hint
 * @property {string} exerciseId - ID of the associated exercise
 * @property {number} order - Order of the hint (1, 2, 3, etc.)
 * @property {string} content - Hint content in Markdown format
 * @property {boolean} isProgressiveReveal - Whether this hint builds on previous hints
 * @property {number} pointPenalty - Points deducted for using this hint
 */

/**
 * @typedef {Object} Challenge
 * @property {string} id - Unique identifier for the challenge
 * @property {string} title - Challenge title
 * @property {string} description - Challenge description
 * @property {string} type - Challenge type
 * @property {string} difficulty - Difficulty level
 * @property {Object} criteria - Criteria to complete the challenge
 * @property {Object} rewards - Rewards for completing the challenge
 * @property {string[]} exerciseIds - IDs of exercises in this challenge
 * @property {Object} unlockCriteria - Criteria to unlock this challenge
 * @property {string[]} tags - Categorization tags
 * @property {string} createdAt - ISO date string of creation time
 * @property {string} updatedAt - ISO date string of last update time
 */

/**
 * @typedef {Object} Achievement
 * @property {string} id - Unique identifier for the achievement
 * @property {string} name - Achievement name
 * @property {string} description - Achievement description
 * @property {string} icon - Icon identifier
 * @property {string} category - Achievement category
 * @property {Object} criteria - Criteria to earn the achievement
 * @property {number} points - Points awarded for earning the achievement
 * @property {Object} rewards - Additional rewards
 * @property {boolean} isHidden - Whether the achievement is hidden until earned
 * @property {boolean} isSpecial - Whether this is a special achievement
 * @property {string} createdAt - ISO date string of creation time
 */

/**
 * @typedef {Object} Narrative
 * @property {string} id - Unique identifier for the narrative
 * @property {string} title - Narrative title
 * @property {string} content - Narrative content in Markdown format
 * @property {string} moduleId - Associated module ID
 * @property {number} order - Display order
 * @property {Object} metadata - Additional narrative-specific data
 * @property {string} createdAt - ISO date string of creation time
 * @property {string} updatedAt - ISO date string of last update time
 */

// No actual export since this is just for documentation purposes
// If using TypeScript, these would be proper interfaces with exports

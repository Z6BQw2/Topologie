/**
 * Achievement types for the gamification system
 * These define the various ways users can earn achievements throughout their learning journey
 */

// Achievement Categories
export const ACHIEVEMENT_CATEGORIES = {
  LEARNING: 'learning',
  MASTERY: 'mastery',
  EXPLORATION: 'exploration',
  SOCIAL: 'social',
  CHALLENGE: 'challenge',
  SPECIAL: 'special'
};

// Achievement Rarity Levels
export const ACHIEVEMENT_RARITY = {
  COMMON: {
    level: 1,
    name: 'Common',
    color: '#91a7ff' // Light blue
  },
  UNCOMMON: {
    level: 2,
    name: 'Uncommon',
    color: '#5c7cfa' // Blue
  },
  RARE: {
    level: 3,
    name: 'Rare',
    color: '#4263eb' // Medium blue
  },
  EPIC: {
    level: 4,
    name: 'Epic',
    color: '#364fc7' // Dark blue
  },
  LEGENDARY: {
    level: 5,
    name: 'Legendary',
    color: '#1e3a8a' // Very dark blue
  }
};

// Learning Progress Achievements
export const LEARNING_ACHIEVEMENTS = {
  FIRST_MODULE_COMPLETED: {
    id: 'first_module_completed',
    category: ACHIEVEMENT_CATEGORIES.LEARNING,
    name: 'First Steps',
    description: 'Complete your first learning module',
    icon: 'first_steps',
    rarity: ACHIEVEMENT_RARITY.COMMON
  },
  TOPOLOGY_FOUNDATIONS: {
    id: 'topology_foundations',
    category: ACHIEVEMENT_CATEGORIES.LEARNING,
    name: 'Foundations Builder',
    description: 'Complete all foundation modules',
    icon: 'foundation',
    rarity: ACHIEVEMENT_RARITY.UNCOMMON
  },
  METRIC_MASTER: {
    id: 'metric_master',
    category: ACHIEVEMENT_CATEGORIES.LEARNING,
    name: 'Metric Master',
    description: 'Complete all metric spaces modules',
    icon: 'ruler',
    rarity: ACHIEVEMENT_RARITY.UNCOMMON
  },
  CONTINUITY_EXPERT: {
    id: 'continuity_expert',
    category: ACHIEVEMENT_CATEGORIES.LEARNING,
    name: 'Continuity Expert',
    description: 'Complete all continuity modules',
    icon: 'smooth_line',
    rarity: ACHIEVEMENT_RARITY.UNCOMMON
  },
  COMPLETENESS_GURU: {
    id: 'completeness_guru',
    category: ACHIEVEMENT_CATEGORIES.LEARNING,
    name: 'Completeness Guru',
    description: 'Complete all completeness modules',
    icon: 'complete_circle',
    rarity: ACHIEVEMENT_RARITY.UNCOMMON
  },
  COMPACTNESS_SAGE: {
    id: 'compactness_sage',
    category: ACHIEVEMENT_CATEGORIES.LEARNING,
    name: 'Compactness Sage',
    description: 'Complete all compactness modules',
    icon: 'compact_box',
    rarity: ACHIEVEMENT_RARITY.RARE
  },
  CONNECTEDNESS_PIONEER: {
    id: 'connectedness_pioneer',
    category: ACHIEVEMENT_CATEGORIES.LEARNING,
    name: 'Connectedness Pioneer',
    description: 'Complete all connectedness modules',
    icon: 'connected_nodes',
    rarity: ACHIEVEMENT_RARITY.RARE
  },
  FUNCTION_SPACE_VOYAGER: {
    id: 'function_space_voyager',
    category: ACHIEVEMENT_CATEGORIES.LEARNING,
    name: 'Function Space Voyager',
    description: 'Complete all function space modules',
    icon: 'function_graph',
    rarity: ACHIEVEMENT_RARITY.EPIC
  },
  TOPOLOGY_MASTER: {
    id: 'topology_master',
    category: ACHIEVEMENT_CATEGORIES.LEARNING,
    name: 'Topology Master',
    description: 'Complete all learning modules',
    icon: 'topology_master',
    rarity: ACHIEVEMENT_RARITY.LEGENDARY
  }
};

// Exercise Mastery Achievements
export const MASTERY_ACHIEVEMENTS = {
  PERFECT_EXERCISE: {
    id: 'perfect_exercise',
    category: ACHIEVEMENT_CATEGORIES.MASTERY,
    name: 'Perfect Solution',
    description: 'Complete an exercise with a perfect score on your first try',
    icon: 'perfect_score',
    rarity: ACHIEVEMENT_RARITY.COMMON
  },
  EXERCISE_STREAK_5: {
    id: 'exercise_streak_5',
    category: ACHIEVEMENT_CATEGORIES.MASTERY,
    name: 'On a Roll',
    description: 'Complete 5 exercises in a row without a mistake',
    icon: 'streak_5',
    rarity: ACHIEVEMENT_RARITY.UNCOMMON
  },
  EXERCISE_STREAK_10: {
    id: 'exercise_streak_10',
    category: ACHIEVEMENT_CATEGORIES.MASTERY,
    name: 'Unstoppable',
    description: 'Complete 10 exercises in a row without a mistake',
    icon: 'streak_10',
    rarity: ACHIEVEMENT_RARITY.RARE
  },
  MASTER_OF_PROOFS: {
    id: 'master_of_proofs',
    category: ACHIEVEMENT_CATEGORIES.MASTERY,
    name: 'Master of Proofs',
    description: 'Complete all proof-building exercises successfully',
    icon: 'proof_master',
    rarity: ACHIEVEMENT_RARITY.EPIC
  },
  VISUALIZER: {
    id: 'visualizer',
    category: ACHIEVEMENT_CATEGORIES.MASTERY,
    name: 'The Visualizer',
    description: 'Create 10 custom visualizations in the sandbox',
    icon: 'visualizer',
    rarity: ACHIEVEMENT_RARITY.RARE
  }
};

// Challenge Achievements
export const CHALLENGE_ACHIEVEMENTS = {
  FIXED_POINT_HUNTER: {
    id: 'fixed_point_hunter',
    category: ACHIEVEMENT_CATEGORIES.CHALLENGE,
    name: 'Fixed Point Hunter',
    description: 'Successfully complete the Banach fixed-point challenge',
    icon: 'fixed_point',
    rarity: ACHIEVEMENT_RARITY.RARE
  },
  TOPOLOGY_EXPLORER: {
    id: 'topology_explorer',
    category: ACHIEVEMENT_CATEGORIES.CHALLENGE,
    name: 'Topology Explorer',
    description: 'Create and analyze 5 different topological spaces in the sandbox',
    icon: 'explorer',
    rarity: ACHIEVEMENT_RARITY.EPIC
  },
  HOMEOMORPHISM_WIZARD: {
    id: 'homeomorphism_wizard',
    category: ACHIEVEMENT_CATEGORIES.CHALLENGE,
    name: 'Homeomorphism Wizard',
    description: 'Successfully identify all homeomorphic pairs in the challenge',
    icon: 'homeomorphism',
    rarity: ACHIEVEMENT_RARITY.EPIC
  },
  TOPOLOGY_OLYMPIAN: {
    id: 'topology_olympian',
    category: ACHIEVEMENT_CATEGORIES.CHALLENGE,
    name: 'Topology Olympian',
    description: 'Complete all advanced challenges with a perfect score',
    icon: 'olympian',
    rarity: ACHIEVEMENT_RARITY.LEGENDARY
  }
};

// Combine all achievement types
export const ALL_ACHIEVEMENTS = {
  ...LEARNING_ACHIEVEMENTS,
  ...MASTERY_ACHIEVEMENTS,
  ...CHALLENGE_ACHIEVEMENTS
};

export default ALL_ACHIEVEMENTS;

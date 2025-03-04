/**
 * Exercise types and configurations
 * Defines the various types of exercises available in the application
 */

// Exercise types for different learning approaches
export const EXERCISE_TYPES = {
  MULTIPLE_CHOICE: 'multiple_choice',
  DRAG_DROP: 'drag_drop',
  GRAPH_MANIPULATION: 'graph_manipulation',
  VISUAL_PROOF: 'visual_proof',
  SHORT_ANSWER: 'short_answer',
  CODE_COMPLETION: 'code_completion',
  MATH_EXPRESSION: 'math_expression',
  INTERACTIVE_VISUALIZATION: 'interactive_visualization',
  PROOF_BUILDER: 'proof_builder',
  SEQUENCE_MANIPULATION: 'sequence_manipulation',
  METRIC_CONSTRUCTION: 'metric_construction',
  TOPOLOGY_CONSTRUCTION: 'topology_construction'
};

// Difficulty levels
export const DIFFICULTY_LEVELS = {
  BEGINNER: {
    id: 'beginner',
    name: 'Beginner',
    value: 1,
    color: '#4caf50' // Green
  },
  INTERMEDIATE: {
    id: 'intermediate',
    name: 'Intermediate',
    value: 2,
    color: '#2196f3' // Blue
  },
  ADVANCED: {
    id: 'advanced',
    name: 'Advanced',
    value: 3,
    color: '#ff9800' // Orange
  },
  EXPERT: {
    id: 'expert',
    name: 'Expert',
    value: 4,
    color: '#f44336' // Red
  }
};

// Content categories for exercises
export const EXERCISE_CATEGORIES = {
  METRIC_SPACES: 'metric_spaces',
  TOPOLOGICAL_SPACES: 'topological_spaces',
  CONTINUITY: 'continuity',
  CONVERGENCE: 'convergence',
  COMPLETENESS: 'completeness',
  COMPACTNESS: 'compactness',
  CONNECTEDNESS: 'connectedness',
  SEPARATION: 'separation',
  FUNCTION_SPACES: 'function_spaces',
  APPLICATIONS: 'applications'
};

// Exercise interaction modes
export const INTERACTION_MODES = {
  SOLO: 'solo',           // Individual practice
  GUIDED: 'guided',       // With hints and explanations
  TIMED: 'timed',         // Time-limited challenge
  EXAM: 'exam',           // Test mode without hints or feedback until completion
  COLLABORATIVE: 'collaborative' // Work with others (future feature)
};

// Exercise configuration for Multiple Choice
export const MULTIPLE_CHOICE_CONFIG = {
  minOptions: 2,
  maxOptions: 6,
  allowMultipleCorrect: true,
  defaultTimeLimit: 120, // seconds
  showFeedbackAfterEach: true
};

// Exercise configuration for Drag & Drop
export const DRAG_DROP_CONFIG = {
  allowPartialCredit: true,
  defaultTimeLimit: 180, // seconds
  snapToGrid: true,
  showCorrectPlacement: false
};

// Exercise configuration for Graph Manipulation
export const GRAPH_MANIPULATION_CONFIG = {
  defaultGraphType: 'undirected',
  availableTools: ['add_node', 'add_edge', 'delete', 'move'],
  autoLayout: true,
  validateOnSubmit: true
};

// Exercise configuration for Visual Proof
export const VISUAL_PROOF_CONFIG = {
  stepByStepValidation: true,
  allowHints: true,
  maxSteps: 10,
  showStepFeedback: true
};

// Exercise configuration for Proof Builder
export const PROOF_BUILDER_CONFIG = {
  availableRules: [
    'universal_instantiation',
    'existential_instantiation',
    'universal_generalization',
    'existential_generalization',
    'conjunction_introduction',
    'conjunction_elimination',
    'disjunction_introduction',
    'disjunction_elimination',
    'conditional_introduction',
    'conditional_elimination',
    'biconditional_introduction',
    'biconditional_elimination',
    'contradiction',
    'case_analysis',
    'proof_by_contradiction'
  ],
  checkLogicalSoundness: true,
  allowCustomSteps: false,
  providePremises: true
};

// Specific exercise subtypes for topology
export const TOPOLOGY_EXERCISE_SUBTYPES = {
  METRIC_VERIFICATION: {
    type: EXERCISE_TYPES.MATH_EXPRESSION,
    description: 'Verify if a function is a metric',
    skills: ['metric_properties', 'function_analysis']
  },
  OPEN_CLOSED_IDENTIFICATION: {
    type: EXERCISE_TYPES.GRAPH_MANIPULATION,
    description: 'Identify open and closed sets in a given space',
    skills: ['set_classification', 'boundary_identification']
  },
  CONTINUITY_PROOF: {
    type: EXERCISE_TYPES.PROOF_BUILDER,
    description: 'Construct a proof of continuity for a given function',
    skills: ['epsilon_delta_manipulation', 'logical_reasoning']
  },
  SEQUENCE_CONVERGENCE: {
    type: EXERCISE_TYPES.SEQUENCE_MANIPULATION,
    description: 'Determine convergence of sequences in various spaces',
    skills: ['sequence_analysis', 'limit_calculation']
  },
  COMPACTNESS_VERIFICATION: {
    type: EXERCISE_TYPES.MULTIPLE_CHOICE,
    description: 'Verify compactness of sets using different characterizations',
    skills: ['covering_properties', 'boundary_analysis']
  },
  CONNECTEDNESS_ANALYSIS: {
    type: EXERCISE_TYPES.GRAPH_MANIPULATION,
    description: 'Analyze connectedness properties of topological spaces',
    skills: ['component_identification', 'path_finding']
  }
};

// Points awarded for different exercise outcomes
export const EXERCISE_POINTS = {
  CORRECT_FIRST_TRY: 100,      // Full points for correct on first attempt
  CORRECT_WITH_HINTS: 80,       // Reduced points when hints were used
  CORRECT_MULTIPLE_TRIES: 70,   // Further reduced for multiple attempts
  PARTIAL_CREDIT: 50,           // Partial credit for nearly correct answers
  PARTICIPATION: 10             // Minimal points just for attempting
};

// Export combined configurations
export const EXERCISE_CONFIGS = {
  [EXERCISE_TYPES.MULTIPLE_CHOICE]: MULTIPLE_CHOICE_CONFIG,
  [EXERCISE_TYPES.DRAG_DROP]: DRAG_DROP_CONFIG,
  [EXERCISE_TYPES.GRAPH_MANIPULATION]: GRAPH_MANIPULATION_CONFIG,
  [EXERCISE_TYPES.VISUAL_PROOF]: VISUAL_PROOF_CONFIG,
  [EXERCISE_TYPES.PROOF_BUILDER]: PROOF_BUILDER_CONFIG
};

export default {
  EXERCISE_TYPES,
  DIFFICULTY_LEVELS,
  EXERCISE_CATEGORIES,
  INTERACTION_MODES,
  EXERCISE_CONFIGS,
  TOPOLOGY_EXERCISE_SUBTYPES,
  EXERCISE_POINTS
};

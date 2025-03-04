/**
 * Error codes used throughout the application
 * Standardized error codes help with consistent error handling and client messaging
 */

// Authentication & Authorization Errors (1000-1999)
export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: {
    code: 1001,
    message: "Invalid email or password"
  },
  SESSION_EXPIRED: {
    code: 1002,
    message: "Your session has expired, please log in again"
  },
  UNAUTHORIZED: {
    code: 1003,
    message: "You don't have permission to access this resource"
  },
  INVALID_TOKEN: {
    code: 1004,
    message: "Invalid authentication token"
  },
  ACCOUNT_LOCKED: {
    code: 1005,
    message: "Account has been locked due to too many failed attempts"
  }
};

// User-related Errors (2000-2999)
export const USER_ERRORS = {
  EMAIL_EXISTS: {
    code: 2001,
    message: "A user with this email already exists"
  },
  USER_NOT_FOUND: {
    code: 2002,
    message: "User not found"
  },
  INVALID_USER_DATA: {
    code: 2003,
    message: "The provided user data is invalid"
  }
};

// Content-related Errors (3000-3999)
export const CONTENT_ERRORS = {
  MODULE_NOT_FOUND: {
    code: 3001,
    message: "The requested learning module could not be found"
  },
  LESSON_NOT_FOUND: {
    code: 3002,
    message: "The requested lesson could not be found"
  },
  LESSON_LOCKED: {
    code: 3003,
    message: "This lesson is locked. Complete previous lessons to unlock."
  },
  CONTENT_UNAVAILABLE: {
    code: 3004,
    message: "This content is currently unavailable"
  }
};

// Exercise-related Errors (4000-4999)
export const EXERCISE_ERRORS = {
  EXERCISE_NOT_FOUND: {
    code: 4001,
    message: "The requested exercise could not be found"
  },
  INVALID_ANSWER: {
    code: 4002,
    message: "The provided answer is invalid"
  },
  EXERCISE_LOCKED: {
    code: 4003,
    message: "This exercise is locked. Complete previous exercises to unlock."
  },
  VALIDATION_FAILED: {
    code: 4004,
    message: "The exercise validation has failed"
  }
};

// Visualization-related Errors (5000-5999)
export const VISUALIZATION_ERRORS = {
  RENDERING_FAILED: {
    code: 5001,
    message: "Failed to render the visualization"
  },
  INCOMPATIBLE_BROWSER: {
    code: 5002,
    message: "Your browser doesn't support this visualization"
  },
  DATA_LOADING_FAILED: {
    code: 5003,
    message: "Failed to load data for the visualization"
  }
};

// Server-related Errors (6000-6999)
export const SERVER_ERRORS = {
  INTERNAL_ERROR: {
    code: 6001,
    message: "An internal server error occurred"
  },
  SERVICE_UNAVAILABLE: {
    code: 6002,
    message: "The service is temporarily unavailable"
  },
  DATABASE_ERROR: {
    code: 6003,
    message: "A database error occurred"
  }
};

// Client-related Errors (7000-7999)
export const CLIENT_ERRORS = {
  NETWORK_ERROR: {
    code: 7001,
    message: "A network error occurred. Please check your connection."
  },
  INVALID_REQUEST: {
    code: 7002,
    message: "The request is invalid"
  },
  RATE_LIMITED: {
    code: 7003,
    message: "Too many requests. Please try again later."
  }
};

// Combine all error codes for easy export
export const ALL_ERROR_CODES = {
  ...AUTH_ERRORS,
  ...USER_ERRORS,
  ...CONTENT_ERRORS,
  ...EXERCISE_ERRORS,
  ...VISUALIZATION_ERRORS,
  ...SERVER_ERRORS,
  ...CLIENT_ERRORS
};

export default ALL_ERROR_CODES;

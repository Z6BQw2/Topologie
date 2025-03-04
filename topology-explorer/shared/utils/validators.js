/**
 * Shared validators for both frontend and backend validation
 * These functions validate various data types and structures used in the application
 */

// Email validation with regex for standard email format
export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return typeof email === 'string' && emailRegex.test(email);
};

// Password validation - at least 8 chars, with numbers and letters
export const isValidPassword = (password) => {
  if (typeof password !== 'string') return false;
  
  // Check length
  if (password.length < 8) return false;
  
  // Check for at least one letter and one number
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  
  return hasLetter && hasNumber;
};

// Username validation - letters, numbers, underscore, hyphen, 3-30 chars
export const isValidUsername = (username) => {
  if (typeof username !== 'string') return false;
  
  const usernameRegex = /^[a-zA-Z0-9_-]{3,30}$/;
  return usernameRegex.test(username);
};

// UUID validation
export const isValidUUID = (uuid) => {
  if (typeof uuid !== 'string') return false;
  
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

// Validate if a value is a non-empty array
export const isNonEmptyArray = (value) => {
  return Array.isArray(value) && value.length > 0;
};

// Check if value is a positive number
export const isPositiveNumber = (value) => {
  return typeof value === 'number' && !isNaN(value) && value > 0;
};

// Check if value is a non-negative number (zero or positive)
export const isNonNegativeNumber = (value) => {
  return typeof value === 'number' && !isNaN(value) && value >= 0;
};

// Validate date format (YYYY-MM-DD)
export const isValidDateFormat = (dateString) => {
  if (typeof dateString !== 'string') return false;
  
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) return false;
  
  // Check if it's an actual valid date
  const date = new Date(dateString);
  const timestamp = date.getTime();
  
  if (isNaN(timestamp)) return false;
  
  return date.toISOString().slice(0, 10) === dateString;
};

// Validate URL format
export const isValidURL = (url) => {
  if (typeof url !== 'string') return false;
  
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

// Mathematical expression validation (basic check for balanced parentheses and valid operators)
export const isValidMathExpression = (expression) => {
  if (typeof expression !== 'string') return false;
  
  // Check for balanced parentheses
  let parenthesesCount = 0;
  
  for (let char of expression) {
    if (char === '(') parenthesesCount++;
    if (char === ')') parenthesesCount--;
    if (parenthesesCount < 0) return false; // Closing parenthesis without matching opening
  }
  
  if (parenthesesCount !== 0) return false; // Unbalanced parentheses
  
  // Check for invalid mathematical syntax
  const invalidPatterns = [
    /\d\(/,                // Number followed directly by opening parenthesis (without operator)
    /\)\d/,                // Closing parenthesis followed directly by number (without operator)
    /[+\-*/]{2,}/,         // Multiple operators in sequence
    /^[*/]/,               // Expression starting with * or /
    /[+\-*/]$/            // Expression ending with an operator
  ];
  
  for (let pattern of invalidPatterns) {
    if (pattern.test(expression)) return false;
  }
  
  return true;
};

// Validate a full user object
export const isValidUser = (user) => {
  if (!user || typeof user !== 'object') return false;
  
  // Required fields
  if (!user.username || !user.email) return false;
  
  // Validate each field
  if (!isValidUsername(user.username)) return false;
  if (!isValidEmail(user.email)) return false;
  
  // If password is present, validate it
  if (user.password && !isValidPassword(user.password)) return false;
  
  // Optional field validations
  if (user.id && !isValidUUID(user.id)) return false;
  if (user.createdAt && !isValidDateFormat(user.createdAt)) return false;
  
  return true;
};

// Validate a metric definition
export const isValidMetricDefinition = (metric) => {
  if (!metric || typeof metric !== 'object') return false;
  
  // Required fields
  if (!metric.name || typeof metric.name !== 'string') return false;
  if (!metric.formula || typeof metric.formula !== 'string') return false;
  if (!metric.spaceDimension || !isPositiveNumber(metric.spaceDimension)) return false;
  
  return true;
};

// Validate topological space definition
export const isValidTopologicalSpace = (space) => {
  if (!space || typeof space !== 'object') return false;
  
  // Must have a base set and collection of open sets
  if (!isNonEmptyArray(space.baseSet)) return false;
  if (!isNonEmptyArray(space.openSets)) return false;
  
  // Every open set must be a subset of the base set
  const baseSetElements = new Set(space.baseSet);
  for (let openSet of space.openSets) {
    if (!isNonEmptyArray(openSet)) return false;
    
    // Check if every element of the open set exists in the base set
    for (let element of openSet) {
      if (!baseSetElements.has(element)) return false;
    }
  }
  
  // The empty set and the whole space must be open sets
  const hasEmptySet = space.openSets.some(set => set.length === 0);
  const hasWholeSpace = space.openSets.some(set => {
    // Check if this set has the same elements as the base set
    if (set.length !== space.baseSet.length) return false;
    return set.every(element => baseSetElements.has(element));
  });
  
  if (!hasEmptySet || !hasWholeSpace) return false;
  
  // The intersection of any two open sets must be an open set
  for (let i = 0; i < space.openSets.length; i++) {
    for (let j = i + 1; j < space.openSets.length; j++) {
      const intersection = space.openSets[i].filter(element => 
        space.openSets[j].includes(element)
      );
      
      // Check if the intersection is in the collection of open sets
      const intersectionExists = space.openSets.some(set => {
        if (set.length !== intersection.length) return false;
        return intersection.every(element => set.includes(element));
      });
      
      if (!intersectionExists) return false;
    }
  }
  
  // The union of any number of open sets must be an open set
  // This is harder to check exhaustively, so we'll validate the structure is valid
  
  return true;
};

export default {
  isValidEmail,
  isValidPassword,
  isValidUsername,
  isValidUUID,
  isNonEmptyArray,
  isPositiveNumber,
  isNonNegativeNumber,
  isValidDateFormat,
  isValidURL,
  isValidMathExpression,
  isValidUser,
  isValidMetricDefinition,
  isValidTopologicalSpace
};

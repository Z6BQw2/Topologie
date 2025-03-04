/**
 * Mathematical helper functions for topology operations and calculations
 * Used throughout the application for consistent mathematical operations
 */

// Basic vector operations
export const vectorAdd = (v1, v2) => {
  if (!Array.isArray(v1) || !Array.isArray(v2) || v1.length !== v2.length) {
    throw new Error('Vectors must be arrays of the same length');
  }
  
  return v1.map((val, i) => val + v2[i]);
};

export const vectorSubtract = (v1, v2) => {
  if (!Array.isArray(v1) || !Array.isArray(v2) || v1.length !== v2.length) {
    throw new Error('Vectors must be arrays of the same length');
  }
  
  return v1.map((val, i) => val - v2[i]);
};

export const vectorScale = (v, scalar) => {
  if (!Array.isArray(v) || typeof scalar !== 'number') {
    throw new Error('First argument must be an array, second must be a number');
  }
  
  return v.map(val => val * scalar);
};

export const dotProduct = (v1, v2) => {
  if (!Array.isArray(v1) || !Array.isArray(v2) || v1.length !== v2.length) {
    throw new Error('Vectors must be arrays of the same length');
  }
  
  return v1.reduce((sum, val, i) => sum + val * v2[i], 0);
};

export const vectorNorm = (v, p = 2) => {
  if (!Array.isArray(v)) {
    throw new Error('Vector must be an array');
  }
  
  if (p === Infinity) {
    return Math.max(...v.map(val => Math.abs(val)));
  }
  
  return Math.pow(
    v.reduce((sum, val) => sum + Math.pow(Math.abs(val), p), 0),
    1 / p
  );
};

// Metric space distances
export const euclideanDistance = (p1, p2) => {
  return vectorNorm(vectorSubtract(p1, p2), 2);
};

export const manhattanDistance = (p1, p2) => {
  return vectorNorm(vectorSubtract(p1, p2), 1);
};

export const chebyshevDistance = (p1, p2) => {
  return vectorNorm(vectorSubtract(p1, p2), Infinity);
};

export const minkowskiDistance = (p1, p2, p = 2) => {
  return vectorNorm(vectorSubtract(p1, p2), p);
};

// Custom distance for discrete topology
export const discreteMetric = (p1, p2) => {
  if (Array.isArray(p1) && Array.isArray(p2)) {
    // For vector inputs, check if they're exactly equal
    if (p1.length !== p2.length) return 1;
    return p1.every((val, i) => val === p2[i]) ? 0 : 1;
  }
  
  // For scalar inputs
  return p1 === p2 ? 0 : 1;
};

// Set operations
export const setUnion = (setA, setB) => {
  const union = new Set(setA);
  for (const elem of setB) {
    union.add(elem);
  }
  return union;
};

export const setIntersection = (setA, setB) => {
  const intersection = new Set();
  for (const elem of setA) {
    if (setB.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
};

export const setDifference = (setA, setB) => {
  const difference = new Set(setA);
  for (const elem of setB) {
    difference.delete(elem);
  }
  return difference;
};

export const isSubset = (setA, setB) => {
  for (const elem of setA) {
    if (!setB.has(elem)) {
      return false;
    }
  }
  return true;
};

export const areDisjoint = (setA, setB) => {
  for (const elem of setA) {
    if (setB.has(elem)) {
      return false;
    }
  }
  return true;
};

// Topology-specific functions
export const isClosed = (set, topology) => {
  // A set is closed if its complement is open
  const universe = topology.universe;
  const complement = setDifference(universe, set);
  
  return topology.openSets.some(openSet => 
    openSet.size === complement.size && 
    isSubset(openSet, complement) && 
    isSubset(complement, openSet)
  );
};

export const closure = (set, topology) => {
  // The closure is the smallest closed set containing the set
  const closedSets = topology.openSets
    .map(openSet => setDifference(topology.universe, openSet))
    .filter(closedSet => isSubset(set, closedSet));
  
  return closedSets.reduce((result, closedSet) => 
    setIntersection(result, closedSet), topology.universe);
};

export const interior = (set, topology) => {
  // The interior is the largest open set contained in the set
  const containedOpenSets = topology.openSets
    .filter(openSet => isSubset(openSet, set));
  
  return containedOpenSets.reduce((result, openSet) => 
    setUnion(result, openSet), new Set());
};

export const boundary = (set, topology) => {
  // The boundary is the closure minus the interior
  const setClosure = closure(set, topology);
  const setInterior = interior(set, topology);
  
  return setDifference(setClosure, setInterior);
};

// Function space operators
export const compose = (f, g) => {
  return x => f(g(x));
};

export const functionAdd = (f, g) => {
  return x => f(x) + g(x);
};

export const functionScale = (f, c) => {
  return x => c * f(x);
};

export const functionDistance = (f, g, metric, domain, samples = 100) => {
  // Sample both functions across the domain and calculate the distance between the results
  const step = (domain[1] - domain[0]) / (samples - 1);
  let maxDistance = 0;
  
  for (let i = 0; i < samples; i++) {
    const x = domain[0] + i * step;
    const distance = metric([f(x)], [g(x)]);
    maxDistance = Math.max(maxDistance, distance);
  }
  
  return maxDistance;
};

// Sequence functions
export const isConvergent = (sequence, limit, epsilon = 1e-10, maxTerms = 1000) => {
  let n = 0;
  while (n < maxTerms) {
    if (Math.abs(sequence(n) - limit) < epsilon) {
      return true;
    }
    n++;
  }
  return false;
};

export const isCauchy = (sequence, epsilon = 1e-10, maxTerms = 1000) => {
  for (let n = 0; n < maxTerms; n++) {
    for (let m = n + 1; m < maxTerms; m++) {
      if (Math.abs(sequence(n) - sequence(m)) >= epsilon) {
        return false;
      }
    }
    // If we get here, all terms after n are within epsilon of each other
    return true;
  }
  return false;
};

// Contraction mapping
export const isContraction = (f, domain, lipschitzConstant, samples = 100) => {
  const points = [];
  const step = (domain[1] - domain[0]) / (samples - 1);
  
  // Generate sample points
  for (let i = 0; i < samples; i++) {
    points.push(domain[0] + i * step);
  }
  
  // Check if the function is a contraction with the given Lipschitz constant
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const x = points[i];
      const y = points[j];
      
      const distInputs = Math.abs(x - y);
      const distOutputs = Math.abs(f(x) - f(y));
      
      if (distOutputs > lipschitzConstant * distInputs) {
        return false;
      }
    }
  }
  
  return true;
};

// Fixed point approximation using Banach fixed-point theorem
export const findFixedPoint = (f, initialGuess, tolerance = 1e-10, maxIterations = 100) => {
  let x = initialGuess;
  let iterations = 0;
  
  while (iterations < maxIterations) {
    const nextX = f(x);
    if (Math.abs(nextX - x) < tolerance) {
      return nextX;
    }
    x = nextX;
    iterations++;
  }
  
  throw new Error('Fixed point iteration did not converge within the maximum number of iterations');
};

// Check if a map is continuous at a point
export const isContinuousAt = (f, x0, epsilon = 1e-10, delta = 1e-10) => {
  const y0 = f(x0);
  
  // Check if for all x with |x - x0| < delta, we have |f(x) - f(x0)| < epsilon
  const testPoints = [
    x0 - delta/2,
    x0 - delta/4,
    x0,
    x0 + delta/4,
    x0 + delta/2
  ];
  
  for (const x of testPoints) {
    if (Math.abs(f(x) - y0) >= epsilon) {
      return false;
    }
  }
  
  return true;
};

// Export all functions
export default {
  vectorAdd,
  vectorSubtract,
  vectorScale,
  dotProduct,
  vectorNorm,
  euclideanDistance,
  manhattanDistance,
  chebyshevDistance,
  minkowskiDistance,
  discreteMetric,
  setUnion,
  setIntersection,
  setDifference,
  isSubset,
  areDisjoint,
  isClosed,
  closure,
  interior,
  boundary,
  compose,
  functionAdd,
  functionScale,
  functionDistance,
  isConvergent,
  isCauchy,
  isContraction,
  findFixedPoint,
  isContinuousAt
};

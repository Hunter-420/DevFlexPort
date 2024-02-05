import rateLimit from 'express-rate-limit';

// Function to create and return the rate limiter middleware
const rateLimiter = () => {
  return rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 request per windowMs
    message: 'Too many requests',
  })
}

// Export the function instead of the limiter object
export { rateLimiter };

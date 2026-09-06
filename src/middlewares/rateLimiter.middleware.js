const rateLimit = require('express-rate-limit');

const apiRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: 'Arithmatrix Security: DDOS attempt blocked.',
    });
  },
});

module.exports = apiRateLimiter;
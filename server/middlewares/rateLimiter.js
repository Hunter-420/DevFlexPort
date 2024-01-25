const requestCounts = {}

const rateLimiter = (req, res, next) => {
    const ipAddress = req.ip

    const limit = 10
    const interval = 1000 * 60

    const key = `${ipAddress}-${Math.floor(Date.now() / interval)}`

    if (!requestCounts[key]) {
        requestCounts[key] = 1
    } else {
        requestCounts[key] += 1
    }

    if (requestCounts[key] > limit) {
        return res.status(429).json({ error: "Too many requests" })
    }

    setTimeout(() => {
        requestCounts[key] -= 1
        if (requestCounts[key] === 0) {
            delete requestCounts[key]
        }
    }, interval)

    next()
}

export { rateLimiter }
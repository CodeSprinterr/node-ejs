module.exports = (req, res, next) => {
    //extract route name
    const route = req.originalUrl.split('?')[0];
    console.log(`Middleware executed for ${route} route.`);
    next(); // Proceed to the next middleware or route handler
};

function validateProductData(req, res, next) {
    const { name, price } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        const error = new Error("Le champ 'name' est requis, doit être une chaîne de caractères et non vide.");
        error.status = 400;
        return next(error);
    }

    if (price === undefined || typeof price !== 'number' || price <= 0) {
        const error = new Error("Le champ 'price' est requis et doit être un nombre positif.");
        error.status = 400;
        return next(error);
    }

    next();
}

module.exports = validateProductData;

function validateAge(req, res, next) {
    const { age } = req.body;

    if (age !== undefined && age < 0) {
        const error = new Error("L'âge ne peut pas être négatif.");
        error.status = 400;
        return next(error);
    }

    next();
}

const express = require('express');
const app = express();

app.use(express.json());

app.post('/example', validateAge, (req, res) => {
    res.send({ message: "Requête valide.", data: req.body });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message || 'Erreur serveur.'
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});

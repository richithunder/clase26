const { body } = require('express-validator');

module.exports = [
    body("name")
    .notEmpty()
    .withMessage("Hay que completar el nombre")
    .bail()
    .isLength({
        min: 3,
    }).withMessage("El nombre debe tener al menos 3 caracteres"),
    body("email").isEmail().withMessage("Debés ingresar un e-mail válido")
]
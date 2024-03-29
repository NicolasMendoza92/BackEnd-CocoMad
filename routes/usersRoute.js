// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const { check } = require('express-validator');

// Crear un usuario

// api/users
router.post('/',
    // estas son validaciones que se hacen antes de llamar al la funcion "createUser"
    [
        check('name', 'El nombre es obligatorio').not().isEmpty().isLength({ max: 30 }),
        check('email', 'Agrega un Email Valido').isEmail().isLength({ max: 30 }),
        check('password', 'El password debe tener mínimo de 6 caracteres').isLength({ min: 6 }),
        check('password', 'El password debe tener maximo de 30 caracteres').isLength({ max: 30 })
    ],
    userController.createUser);

// defino las rutas que voy a usar y las llamo de userController

router.put(
    '/image',
    [check('image', 'La imagen es obligatoria').not().isEmpty()],
    userController.refreshImage
);

router.post('/favorites',userController.updateFavs);

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.modifyUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
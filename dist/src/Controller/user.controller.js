"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.CreateUser = void 0;
const user_model_1 = require("../models/user.model");
const CreateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        // Llamar al método para registrar el usuario
        const user = yield user_model_1.User.registerUser(username, password);
        // Respuesta exitosa
        res.status(201).json({
            user
        });
    }
    catch (error) { // Especificamos el tipo de error como any
        console.log('error con creacion de usuario', error);
        res.status(500).json({ message: 'correo no valido', error });
    }
});
exports.CreateUser = CreateUser;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        // Llamar al método para iniciar sesión
        const user = yield user_model_1.User.loginUser(username, password);
        // Respuesta exitosa
        res.status(201).json({
            user
        });
    }
    catch (error) { // Especificamos el tipo de error como any
        console.log('Error con el inicio de sesión:', error);
        res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
    }
});
exports.Login = Login;

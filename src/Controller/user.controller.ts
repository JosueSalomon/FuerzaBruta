import { User } from '../models/user.model';
import  { Request, Response } from 'express';

export const CreateUser = async (req: Request, res: Response) => {
    const { 
        username, 
        password 
    } = req.body;

    try {
        // Llamar al método para registrar el usuario
        const user = await User.registerUser(username, password);
        
        // Respuesta exitosa
        res.status(201).json({  
            user
                });
    } catch (error: any) { // Especificamos el tipo de error como any
        console.log('error con creacion de usuario', error);
        res.status(500).json({ message: 'correo no valido', error });
    }
}

export const Login = async (req: Request, res: Response) => {
    const { 
        username, 
        password 
    } = req.body;

    try {
        // Llamar al método para iniciar sesión
        const user = await User.loginUser(username, password);

        // Respuesta exitosa
        res.status(201).json({  
            user
                });
    } catch (error: any) { // Especificamos el tipo de error como any
        console.log('Error con el inicio de sesión:', error);
        res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
    }
}
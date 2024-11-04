import  supabase  from '../utils/database';

export class User {

    static async registerUser(
        username: string,
        password: string
    ) {
        const { data, error } = await supabase.rpc('register_user', {
            p_username: username,
            p_password: password
        });
        
        if (error) {
            throw error;
        }
        
        return data;
    }
    
    static async loginUser(
        username: string,
        password: string
    ) {
        const { data, error } = await supabase.rpc('login_user', {
            p_username: username,
            p_password: password
        });
        
        if (error) {
            throw error;
        }
        
        return data;
    }

}
import api from '@/plugins/axios'

const register = async ({ email, password, matricula, tipo_usuario }) => {
    try {
        const { data } = await api.post('cadastro/',{
            email,
            password,
            matricula,
            tipo_usuario
        });
        return data
    }
    catch (error){
        return error.message
    }
}

export default register;
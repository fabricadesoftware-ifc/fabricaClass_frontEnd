import api from '@/plugins/axios'

const login = async (user) => {
    try {
        const {data} = await api.post('login/', user);
        return data;
    }
    catch (error){
        return error.message;
    }
};

export default login;
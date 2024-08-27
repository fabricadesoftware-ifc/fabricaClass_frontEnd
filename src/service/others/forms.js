import api from '../../plugins/axios'
class FormService {
    async createForm(formulario) {
        try {
            const { data } = await api.post('formulario/', formulario);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async getForms() {
        try {
            const { data } = await api.get('formulario/');
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async getForm(id) {
        try {
            const { data } = await api.get(`formulario/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async updateForm(formulario) {
        try {
            const { data } = await api.patch(`formulario/${formulario.id}/`, formulario);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async deleteForm(id) {
        try {
            const { data } = await api.delete(`formulario/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    }
}

export default new FormService();
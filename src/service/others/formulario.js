import api from '../../plugins/axios'

class FormularioService {
    async createFormulario(formulario) {
        try {
            const { data } = await api.post('formulario/', formulario);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async getFormularios() {
        try {
            const { data } = await api.get('formulario/');
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async getFormulario(id) {
        try {
            const { data } = await api.get(`formulario/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async updateFormulario(formulario) {
        try {
            const { data } = await api.patch(`formulario/${formulario.id}/`, formulario);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async deleteFormulario(id) {
        try {
            const { data } = await api.delete(`formulario/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    }
}

export default new FormularioService();
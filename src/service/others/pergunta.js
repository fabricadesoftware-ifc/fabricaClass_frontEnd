import api from '../../plugins/axios'

class PerguntaService {
    async createPergunta(pergunta) {
        try {
            const { data } = await api.post('pergunta/', pergunta);
            return data;
        } catch (error) {
            return error.message;
        }
    };
    async getPerguntas() {
        try {
            const { data } = await api.get('pergunta/');
            return data;
        } catch (error) {
            return error.message;
        }
    };
    async getPergunta(id) {
        try {
            const { data } = await api.get(`pergunta/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    };
    async updatePergunta(pergunta) {
        try {
            const { data } = await api.patch(`pergunta/${pergunta.id}/`, pergunta);
            return data;
        } catch (error) {
            return error.message;
        }
    };
    async deletePergunta(id) {
        try {
            const { data } = await api.delete(`pergunta/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    };
    async getPerguntasByFormulario(id) {
        try {
            const { data } = await api.get(`pergunta/formulario/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    };
}

export default new PerguntaService();
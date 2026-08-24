const URL_BASE = "https://memoteca-api-65ih.onrender.com";

const api = {

    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos`);
            return response.data;
        } catch (error) {
            alert('Erro ao buscar pensamentos');
            throw error;
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await axios.post(
                `${URL_BASE}/pensamentos`,
                pensamento
            );

            return response.data;
        } catch (error) {
            alert('Erro ao salvar pensamento');
            throw error;
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(
                `${URL_BASE}/pensamentos/${id}`
            );

            return response.data;
        } catch (error) {
            alert('Erro ao buscar pensamento');
            throw error;
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(
                `${URL_BASE}/pensamentos/${pensamento.id}`,
                pensamento
            );

            return response.data;
        } catch (error) {
            alert('Erro ao editar pensamento');
            throw error;
        }
    },

    async excluirPensamento(id) {
        try {
            await axios.delete(
                `${URL_BASE}/pensamentos/${id}`
            );
        } catch (error) {
            alert('Erro ao excluir pensamento');
            throw error;
        }
    }

};

export default api;
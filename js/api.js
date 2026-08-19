const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3001/pensamentos');

            return await response.json();
        } catch (error) {
            alert('Erro ao buscar pensamentos');
            throw error;
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await fetch('http://localhost:3001/pensamentos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json();
        } catch (error) {
            alert('Erro ao salvar pensamento');
            throw error;
        }
    },

        async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`http://localhost:3001/pensamentos/${id}`);
            return await response.json();
        } catch (error) {
            alert('Erro ao buscar pensamentos');
            throw error;
        }
    },

        async editarPensamento(pensamento) {
        try {
            const response = await fetch(`http://localhost:3001/pensamentos/${pensamento.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json();
        } catch (error) {
            alert('Erro ao editar pensamento');
            throw error;
        }
    },

            async excluirPensamento(id) {
        try {
            const response = await fetch(`http://localhost:3001/pensamentos/${id}`, {
                method: 'DELETE'
            })
        } 
        catch (error) {
            alert('Erro ao excluir um pensamento');
            throw error;
        }
    },

};

export default api;
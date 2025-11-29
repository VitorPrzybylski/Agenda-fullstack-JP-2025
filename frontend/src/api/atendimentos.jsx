import api from "./api";

export const getAtendimentos = async () => {
    const token = localStorage.getItem("token"); // pega o token do login

    const response = await api.get('/api/v1/atendimentos', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(response.status !== 200){
        return [];
    }

    return response.data.atendimentos;
}

export const createAtendimento = async (atendimento) => {
    const token = localStorage.getItem("token");
    const response = await api.post('/api/v1/atendimento/create', atendimento, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

export const updateAtendimento = async (id, atendimento) => {
    const token = localStorage.getItem("token");
    const response = await api.put(`/api/v1/atendimento/${id}`, atendimento, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

export const deleteAtendimento = async (id) => {
    const token = localStorage.getItem("token");
    const response = await api.delete(`/api/v1/atendimento/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response;
}

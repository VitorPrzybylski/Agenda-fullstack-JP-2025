import api from "./api";
 
export const getAtendimentos = async () => {
    const response = await api.get("/atendimentos");
 
    if (response.status !== 200) {
        return [];
    }
 
    return response.data;
};
 
export const getAtendimento = async (id) => {
    const response = await api.get(`/atendimento/${id}`);
    return response.data;
};
 
export const createAtendimento = async (atendimento) => {
    const response = await api.post("/atendimento/create", atendimento);
    return response;
};
 
export const updateAtendimento = async (id, atendimento) => {
    const response = await api.put(`/atendimento/update/${id}`, atendimento);
    return response;
};
 
export const deleteAtendimento = async (id) => {
    const response = await api.delete(`/atendimento/delete/${id}`);
    return response;
};
 
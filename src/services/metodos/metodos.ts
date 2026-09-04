import axios from 'axios';
import api from '../api/api'

interface Ipessoa {
    nome: string;
    id: string;
    email?: string;
    telefone?: string;
}

export const listar = async (nome?: string) => {
    try{
        const response = await api.get<Ipessoa[]>('/pessoas', {
            params: nome ? {nome} : undefined
        })
        return response
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log(error.message)
        }
    }
}

export const criar = async (pessoa: Ipessoa) => {
    const response = await api.post('/pessoas', pessoa)
    return response
}

export const buscarpnome = async (nome: string) => {
    try{
        const response = await api.get(`/pessoas/nome/${encodeURIComponent(nome)}`)
        return response
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log(error.message)
        }
    }
}

export const buscarpid = async (id: string) => {
    try{
        const response = await api.get(`/pessoas/${id}`)
        return response
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log(error.message)
        }
    }
}
export const atualizarpid = async (
    id: string,
    dados: Partial<Ipessoa>
) => {
    const response = await api.put(`/pessoas/${encodeURIComponent(id)}`, dados)
    return response
}

export const removerpid = async (id: string) => {
    const response = await api.delete(`/pessoas/${id}`)
    return response
}
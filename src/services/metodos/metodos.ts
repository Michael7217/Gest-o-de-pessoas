import axios from 'axios';
import api from '../api/api'

interface Ipessoa {
    nome: string;
    id: string;
}

export const listar = async () => {
    try{
        const response = await api.get<Ipessoa[]>('/pessoas')
        return response
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log(error.message)
        }
    }
}

export const criar = async (pessoa: Ipessoa) => {
    try{
        const response = await api.post('/pessoas', pessoa)
        return response
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log(error.message)
        }
    }
}

export const buscarpnome = async (nome: string) => {
    try{
        const response = await api.get(`/pessoas/nome/${nome}`)
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
export const atualizarpid = async (id: string) => {
    try{
        const response = await api.put(`/pessoas/${id}`)
        return response
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log(error.message)
        }
    }
}

export const removerpid = async (id: string) => {
    try{
        const response = await api.delete(`/pessoas/${id}`)
        return response
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log(error.message)
        }
    }
}
import Axios from 'axios'

const api = Axios.create({
    baseURL: 'http://localhost:5000'
})

export default class ListaNegraApi{

    async Cadastrar(ln){
        const resp = await api.post('/listanegra', ln);
        return resp;
    }

    async Consultar(){
        const resp = await api.get('/listanegra');
        return resp.data;
    }
    
    async Alterar(Id, ln ){
        const resp = await api.put(`/listanegra/${Id}`, ln);
        return resp.data;
    }

    async Deletar(Id){
        const resp = await api.delete(`/listanegra/${Id}`);
        return resp.data;
    }
}
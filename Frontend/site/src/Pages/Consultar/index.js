import React, {useState, useEffect} from 'react';
import './consultar.css';
import {Link} from 'react-router-dom';

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../Services/ListaNegraApi'
const api = new ListaNegraApi();

export default function Consultar(){
    const [Registros, setRegistros] = useState([])

    const consultarClick = async () =>{
        const lns = await api.Consultar()
        setRegistros([... lns])
    }

    const deletarClick = async (Id) =>{
        const deletado = await api.Deletar(Id)
        await deletarClick

        toast.dark('Excluido com sucesso!');
    }

    useEffect(() => {
        consultarClick();
    },[])

    return(
        <div className="App">
            <div className="App-header">
                <h1>Consultar Lista Negra</h1>

                <div>
                    <button onClick={consultarClick}> Consultar</button>
                </div>

                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Motivo</th>
                                <th>Local</th>
                                <th>Inclusão</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Registros.map(item =>
                                <tr key={item.id}>
                                    <th>#{item.id}</th>
                                    <td>{item.nome}</td>
                                    <td>{item.motivo}</td>
                                    <td>{item.local}</td>
                                    <td>{new Date(item.inclusão).toLocaleString()}</td>
                                    <td>
                                        <button><Link to={{
                                            pathname: "/Alterar",
                                            state: {
                                                id: item.id,
                                                nome: item.nome,
                                                motivo: item.motivo,
                                                local: item.local,
                                                inclusão: item.inclusão
                                            }
                                        }}>
                                            
                                            Alterar
                                        </Link></button>
                                    </td>
                                    <td>
                                        <button onClick={() => deletarClick(item.id)}>Excluir</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div>
                    <h2> <Link to="/">Voltar</Link> </h2>
                </div>
                <ToastContainer/>
            </div>
        </div>
    )
}
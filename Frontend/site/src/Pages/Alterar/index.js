import React, { useState } from 'react';
import './alterar.css'; 
import {Link, useHistory} from 'react-router-dom';

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../Services/ListaNegraApi'
const Api = new ListaNegraApi();

export default function Alterar(props){
    const Navegação = useHistory();

    const [Id, setId] = useState(props.location.state.id)
    const [Nome, setNome] = useState(props.location.state.nome)
    const [Motivo, setMotivo] = useState(props.location.state.motivo)
    const [Local, setLocal] = useState(props.location.state.local)
    const [Inclusão, setInclusão] = useState(props.location.state.inclusão.substr(0, 10))

    const alterarClick = async () => {
        const request = {
            Nome: Nome,
            Motivo: Motivo,
            Local: Local,
            Inclusão: Inclusão
        };
            const resp = await Api.Alterar(Id, request);

            toast.dark('Alterado com sucesso!');

            Navegação.goBack();
    }

    return(
        <div className="App">
            <div className="App-header">
                <h1>Alterar</h1>

                <div>
                    <label>Nome:</label>
                    <input type="text"
                    value={Nome}
                    onChange={e => setNome(e.target.value)}/>
                </div>
                <div>
                    <label>Motivo:</label>
                    <input type="text"
                    value={Motivo}
                    onChange={e => setMotivo(e.target.value)}/>
                </div>
                <div>
                    <label>Local:</label>
                    <select
                    value={Local}
                    onChange={e => setLocal(e.target.value)}>
                        <option value="Casa">Casa</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Escola">Escola</option>
                        <option value="Rua">Rua</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
                <div>
                    <label>Quando?:</label>
                    <input type="date"
                    value={Inclusão}
                    onChange={e => setInclusão(e.target.value)}/>
                </div>
                <div>
                    <button onClick={alterarClick}>Alterar</button> 
                </div>
                
                <div>
                    <h2> <Link to="/Consultar">Voltar</Link> </h2>
                </div>

                <ToastContainer/>
            </div>
        </div>
    )
}
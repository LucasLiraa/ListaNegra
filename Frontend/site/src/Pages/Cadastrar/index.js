import React, { useState } from 'react';
import './cadastrar.css'; 
import {Link} from 'react-router-dom';

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../Services/ListaNegraApi'
const Api = new ListaNegraApi();

export default function Cadastrar(){
    const [Nome, setNome] = useState('')
    const [Motivo, setMotivo] = useState('')
    const [Local, setLocal] = useState('')
    const [Inclusão, setInclusão] = useState('')

    const salvarClick = async () => {
        const resp = await 
            Api.Cadastrar({
                Nome: Nome,
                Motivo: Motivo,
                Local: Local,
                Inclusão: Inclusão
            });

            toast.dark('Cadastrado com sucesso!');

    }

    return(
        <div className="App">
            <div className="App-header">
                <h1>Cadastrar na Lista Negra</h1>

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
                    <button onClick={salvarClick}>Cadastrar</button> 
                </div>
                
                <div>
                    <h2> <Link to="/">Voltar</Link> </h2>
                </div>

                <ToastContainer/>
            </div>
        </div>
    )
}
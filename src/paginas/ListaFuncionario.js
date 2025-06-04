import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaFuncionario() {
    //Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/funcionario`);
        console.log(data);
        setDados(data);
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            <TituloFuncionario titulo="Funcionario"
                descricao="Gerencie aqui os funcionários da biblioteca"
                rota="/cadastrofuncionario" />


            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Código</th>
                                <th scope="col">Funcionario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary"
                                            href={`/cadastrofuncionario/${d.idfuncionario}`}>Alterar</a>
                                    </td>
                                    <td>{d.idfuncionario}</td>
                                    <td>{d.nomefuncionario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};
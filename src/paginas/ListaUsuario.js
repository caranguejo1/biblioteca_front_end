import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaUsuario() {
    //Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/usuario`);
        console.log(data);
        setDados(data);
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            <TituloUsuario titulo="Usuários"
                descricao="Gerencie aqui os usuários da biblioteca"
                rota="/cadastrousuario" />


            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Código</th>
                                <th scope="col">Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary"
                                            href={`/cadastrousuario/${d.idusuario}`}>Alterar</a>
                                    </td>
                                    <td>{d.idusuario}</td>
                                    <td>{d.nomeusuario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};
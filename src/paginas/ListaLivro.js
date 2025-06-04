import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function listaLivro() {
    //Declarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/livro`);
        console.log(data);
        setDados(data);
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            <TituloLivro titulo="Livro"
                descricao="Gerencie aqui os livros da biblioteca"
                rota="/cadastrolivro" />


            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Código</th>
                                <th scope="col">livro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((d, i) => (
                                <tr>
                                    <td>
                                        <a className="btn btn-primary"
                                            href={`/cadastrolivro/${d.idlivro}`}>Alterar</a>
                                    </td>
                                    <td>{d.idlivro}</td>
                                    <td>{d.nomelivro}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};
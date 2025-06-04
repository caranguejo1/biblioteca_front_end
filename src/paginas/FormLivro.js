import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormLivro() {
    const navegacao = useNavigate();
    const { id } = useParams();
    const [nomelivro, setNomeLivro] = useState('');

    const voltar = () => {
        navegacao('/listalivro');
    };

    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/livro/${id}`);
        setNomeLivro(data.nomelivro);
    }

    const alterar = async () => {
        let body = {
            "nomelivro": nomelivro
        };

        await axios.put(`http://localhost:4000/livro/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "nomelivro": nomelivro
        };

        await axios.post(`http://localhost:4000/livro`, body);
        voltar();
    }

    const salvar = async () => {
        if (id) {
            alterar();
        }
        else {
            inserir();
        }
    }

    const excluir = async () => {
        await axios.delete(`http://localhost:4000/livro/${id}`);
        voltar();
    }

    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <TituloCadastro id={id} titulo="livro" />

            <form>
                {id && (
                    <div className="mb-3">
                        <label className="form-label">
                            Código
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={id}
                        />
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label">
                        Nome do livro
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nomelivro}
                        onChange={(evento) => setNomeLivro(evento.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={() => salvar()}>
                    Salvar
                </button>
                <button type="button"
                    className="btn btn-secondary"
                    onClick={() => voltar()}>
                    Cancelar
                </button>
                {id && (
                    <button type="button"
                        className="btn btn-danger"
                        onClick={() => excluir()}>
                        Excluir
                    </button>
                )}
            </form>
        </>
    );
};
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormLivro() {
    const navegacao = useNavigate();
    const { id } = useParams();
    const [titulo, settitulo] = useState('');
    const [ideditora, setIdEditora] = useState('');
    const [idcategoria, setIdCategoria] = useState('');

    const voltar = () => {
        navegacao('/listalivro');
    };

    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/livro/${id}`);
        settitulo(data.titulo);
        setIdEditora(data.ideditora || '');
        setIdCategoria(data.idcategoria || '');
    }

    const alterar = async () => {
        let body = {
            "titulo": titulo,
            "ideditora": ideditora,
            "idcategoria": idcategoria
        };

        await axios.put(`http://localhost:4000/livro/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "titulo": titulo,
            "ideditora": ideditora,
            "idcategoria": idcategoria
        };

        console.log(body);

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
                            readOnly
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
                        value={titulo}
                        onChange={(evento) => settitulo(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        ID Editora
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={ideditora}
                        onChange={(evento) => setIdEditora(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        ID Categoria
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={idcategoria}
                        onChange={(evento) => setIdCategoria(evento.target.value)}
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
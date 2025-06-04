import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormUsuario() {
    const navegacao = useNavigate();
    const { id } = useParams();
    const [nomecategoria, setNomeUsuario] = useState('');

    const voltar = () => {
        navegacao('/listausuario');
    };

    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/usuario/${id}`);
        setNomeUsuario(data.nomeusuario);
    }

    const alterar = async () => {
        let body = {
            "nomeusuario": nomeusuario
        };

        await axios.put(`http://localhost:4000/usuario/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "nomeusuario": nomeusuario
        };

        await axios.post(`http://localhost:4000/usuario`, body);
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
        await axios.delete(`http://localhost:4000/usuario/${id}`);
        voltar();
    }

    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <TituloUsuario id={id} titulo="usuario" />

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
                        Nome do usuario
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nomeusuario}
                        onChange={(evento) => setNomeUsuario(evento.target.value)}
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
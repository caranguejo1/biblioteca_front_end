import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormFuncionario() {
    const navegacao = useNavigate();
    const { id } = useParams();
    const [nomefuncionario, setNomeFuncionario] = useState('');

    const voltar = () => {
        navegacao('/listafuncionario');
    };

    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/funcionario/${id}`);
        setNomeFuncionario(data.nomefuncionario);
    }

    const alterar = async () => {
        let body = {
            "nomefuncionario": nomefuncionario
        };

        await axios.put(`http://localhost:4000/funcionario/${id}`, body);
        voltar();
    }

    const inserir = async () => {
        let body = {
            "nomefuncionario": nomefuncionario
        };

        await axios.post(`http://localhost:4000/funcionario`, body);
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
        await axios.delete(`http://localhost:4000/funcionario/${id}`);
        voltar();
    }

    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <TituloCadastro id={id} titulo="funcionario" />

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
                        Nome do funcionario
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={nomefuncionario}
                        onChange={(evento) => setNomeFuncionario(evento.target.value)}
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
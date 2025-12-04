import React, { useEffect, useState, useCallback } from "react";
import Styles from "./Perfis.module.css";
import { useNavigate } from "react-router-dom";

function Perfis() {

    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    const chavePerfisPorUsuario = `perfis_${usuarioLogado}`;

    const carregarPerfis = useCallback(() => {
        const dados = JSON.parse(localStorage.getItem(chavePerfisPorUsuario)) || [];
        setUsuarios(Array.isArray(dados) ? dados : []);
    }, [chavePerfisPorUsuario]);

    useEffect(() => {
        carregarPerfis();
    }, [carregarPerfis]);

    function selecionarPerfil(perfil) {
        localStorage.setItem("perfilAtivo", JSON.stringify({
            nome: perfil.nome,
            foto: perfil.foto
        }));
        navigate("/Home");
    }

    function deletarPerfil(index) {
        let dados = JSON.parse(localStorage.getItem(chavePerfisPorUsuario)) || [];
        if (!Array.isArray(dados)) dados = [];

        if (index < 0 || index >= dados.length) return;

        if (!window.confirm("Deseja excluir este perfil?")) return;

        dados.splice(index, 1);
        localStorage.setItem(chavePerfisPorUsuario, JSON.stringify(dados));
        setUsuarios([...dados]);
    }

    function irParaCriarPerfil() {
        window.location.href = "/CriarPerfil";
    }

    const color = { color: "#f1f1f1" };

    return (
        <body className={Styles.bodyPerfis}>
            <div>
                <div className={Styles.tituloPagina}>
                    <h1>Quem está assistindo?</h1>
                </div>

                <div className={Styles.perfis}>
                    {usuarios.map((perfil, index) => (
                        <div
                            key={index}
                            className={`perfil-${index + 1}`}
                            onClick={() => selecionarPerfil(perfil)}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={perfil.foto} alt={`Perfil ${index + 1}`} />
                            <p style={color}>{perfil.nome}</p>
                            <button
                                className={Styles.deleteBtn}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deletarPerfil(index);
                                }}
                            >
                                Excluir
                            </button>
                        </div>
                    ))}

                    {usuarios.length < 5 && (
                        <div id="criarPerfil" className={Styles.criarPerfil} onClick={irParaCriarPerfil}>
                            <div id="btn" className={Styles.addConta}>
                                <p className={Styles.mais}>+</p>
                            </div>
                            <p style={color}>Criar perfil</p>
                        </div>
                    )}
                </div>
            </div>
        </body>
    );
}

export default Perfis;

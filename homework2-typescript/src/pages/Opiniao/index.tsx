import styles from "./Opiniao.module.css";
import React, { useState } from "react";
import * as yup from "yup";

export const Opiniao: React.FC = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valueInput = (e: { target: { name: any; value: any } }) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const addUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!(await validate())) return;
    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: "success",
        mensagem: "Usuário cadastrado com sucesso!!",
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } else {
      setStatus({
        type: "error",
        mensagem: "Erro! Usuário não foi cadastrado!",
      });
    }
  };
  async function validate() {
    let schema = yup.object().shape({
      password: yup
        .string()
        .required("Erro: Necessário preencher o campo senha!")
        .min(6, "Erro: A senha deve ter no mínimo 6 caracteres!"),

      email: yup
        .string()
        .required("Erro: Necessário preencher o campo e-mail!")
        .email("Erro: Necessário preencher o campo com e-mail válido!"),

      name: yup.string().required("Erro: Necessário preencher o campo nome!"),
    });
    try {
      await schema.validate(user);
      return true;
    } catch (err: any) {
      setStatus({
        type: "error",
        mensagem: err.errors,
      });
      return false;
    }
  }
  return (
    <>
      <div className={styles.background}>
        {status.type === "success" ? (
          <p style={{ color: "#00ff00" }}>{status.mensagem}</p>
        ) : (
          ""
        )}
        {status.type === "error" ? (
          <p style={{ color: "#ff0000" }}>{status.mensagem}</p>
        ) : (
          ""
        )}

        <div className={styles.formu}>
          <form onSubmit={addUser}>
            <div className={styles.field}>
              <label className={styles.label}>Nome*: </label>
              <input
                type="text"
                name="name"
                placeholder="Nome do usuário"
                onChange={valueInput}
                value={user.name}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>E-mail*: </label>
              <input
                type="email"
                name="email"
                placeholder="Digite um email válido"
                onChange={valueInput}
                value={user.email}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Senha*: </label>
              <input
                type="password"
                name="password"
                placeholder="Senha para poder cadastrar"
                autoComplete="on"
                onChange={valueInput}
                value={user.password}
              />
            </div>
            * Campo obrigatório
            <br />
            <br />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Opiniao;

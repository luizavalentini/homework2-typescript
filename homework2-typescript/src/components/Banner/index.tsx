import styles from "./Banner.module.css";
import minhaFoto from "../../assets/minha-foto.png";

export const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Rhaenyra Targaryen</h1>

        <p className={styles.paragrafo}>
          Rhaenyra foi a única criança sobrevivente do Rei Viserys I com sua
          primeira mulher, uma senhora da Casa Arryn. Ela cresceu sendo
          preparada para se tornar a primeira rainha reinante dos Sete Reinos.
          Aos sete anos de idade, Rhaenyra montou a dragão-fêmea Syrax
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Rhaenyra Targaryen"
        />
      </div>
    </div>
  );
};

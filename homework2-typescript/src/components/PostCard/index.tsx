import styles from "./PostCard.module.css";

export type PostCard = {
  post: {
    id: number;
    titulo: string;
    texto: string
  };
};
export const PostCard: React.FC<PostCard> = ({ post }) => {
  return (
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`../../assets/posts/${post.id}/img.jpg`}
          alt="Imagem do Post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
      </div>
  );
};

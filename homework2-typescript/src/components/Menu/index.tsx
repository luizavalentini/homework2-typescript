import styles from './Menu.module.css';
import { MenuLink } from '../MenuLink';

export const Menu: React.FC = () => {
    return(
        <header>
            <nav className={styles.navegacao}>
               <MenuLink to="/">
                    Início
               </MenuLink>
               <MenuLink to="/SobreMim">
                    Sobre Mim
               </MenuLink>
               <MenuLink to="/Opiniao">
                    Deixe sua Opinião
               </MenuLink>
            </nav>
        </header>
    );
  };
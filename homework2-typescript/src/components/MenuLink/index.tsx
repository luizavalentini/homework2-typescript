import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export type MenuLink = {
  to: string;
  children: React.ReactNode;
  };

export const MenuLink: React.FC<MenuLink> = ({children, to}) => {
    const localizacao = useLocation();
    return(
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkSublinhado : ''}
        `} to={to}>
            {children}
        </Link>
    )
};
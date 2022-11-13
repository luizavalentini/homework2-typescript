import { Outlet } from "react-router-dom";
import { Banner } from "../Banner";
export const PaginaPadrao: React.FC = () => {
    return(
            <main>
                <Banner />
                <Outlet />
            </main>
    );
  };
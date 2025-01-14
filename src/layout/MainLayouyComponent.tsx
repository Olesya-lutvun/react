import { Outlet } from "react-router";
import { MenuComponent } from "../components/menu/MenuComponent";


 export const MainLayout = () =>{
    return <div>
    <MenuComponent/>
     <Outlet/>
     </div>
};

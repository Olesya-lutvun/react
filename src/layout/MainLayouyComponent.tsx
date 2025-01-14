import { Outlet } from "react-router";


 export const MainLayout = () =>{
    return(
     <>
         <div className={'main-layout'}>MainLayout</div>
     <hr/>
     <Outlet/>
     </>
    );
};

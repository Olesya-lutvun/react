import { Outlet } from "react-router"
import Menu from "../components/menu"

export  const  MainLayout = () =>{
    return(
        <>
        <Menu/>
        <Outlet/>
        </>
    )
}
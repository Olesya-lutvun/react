import { Outlet } from "react-router"
import { PaginationComponent } from "../components/PaginationComponent"

export const PaginationLayaut =()=>{
    return(
        <>
        <Outlet/>
        <PaginationComponent/>
        </>
    )
}
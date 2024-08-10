import { ChatButton } from "./components/ChatButtons"
import { Footer } from "./components/Footer"
import { Header } from "./components/header.component"
import { Outlet } from "react-router-dom"

export function MainLayout(){
    return(
        <>
        <Header/>
        <Outlet></Outlet>
        <Footer/>
        <ChatButton/>
        </>
    )
}
import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import OffCanvas from "../components/OffCanvas" 

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({children}: AppLayoutProps) => {
    return (
        <>
        <OffCanvas/>
        {children}
        <Footer />
        </>
    );
} 

export default AppLayout;
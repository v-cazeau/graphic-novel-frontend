import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import OffCanvas from "../components/OffCanvas" 
import TransitionComponent from "src/components/Transition";
import TransitionProvider from "../components/Transition"

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({children}: AppLayoutProps) => {
    return (
        <>
        <OffCanvas />
        <TransitionProvider>
        <div className="content-container">
          <TransitionComponent>{children}</TransitionComponent>
        </div>
      </TransitionProvider>
        <Footer />
        </>
    );
} 

export default AppLayout;
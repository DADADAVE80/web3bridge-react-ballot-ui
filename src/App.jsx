import { configureWeb3Modal } from ".";
import '@radix-ui/themes/styles.css';
import { useEffect } from "react";
import { Container } from "@radix-ui/themes";
import Header from "./components/Header.jsx";

configureWeb3Modal();

export default function App() {

    useEffect(() => {

    }, []);

    return (
        <Container>
            <Header />
            <div>
                <w3m-button />

            </div>
            
        </Container>);
}
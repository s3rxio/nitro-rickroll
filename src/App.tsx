import React from "react";
import Layout from "./components/Layout";
import Main from "./components/Main/Main";
import About from "./components/About/About";

const App: React.FC = () => {
    return (
        <>
            <Layout>
                <Main />
                <About />
            </Layout>
        </>
    );
};

export default App;
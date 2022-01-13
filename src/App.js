import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Shop } from "./components/Shop/Shop";

import { ContextProvider } from "./context";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </React.Fragment>
  );
}

export default App;

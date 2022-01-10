import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Shop } from "./components/Shop/Shop";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Shop />
      <Footer />
    </React.Fragment>
  );
}

export default App;

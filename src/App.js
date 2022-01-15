import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Shop } from "./components/Shop/Shop";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ContextProvider } from "./context";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <ContextProvider>
          <Routes>
            <Route exact path='/ReactLearn-vitrina' element={<Shop />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </ContextProvider>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;



import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const App = () => (
  
  <>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
       
      </Routes>
    </BrowserRouter>
  

  
  </>
);

export default App;

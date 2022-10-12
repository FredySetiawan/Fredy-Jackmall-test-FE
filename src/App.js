
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Delevery from "./Pages/Delivery";


function App() {

 

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Delevery />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

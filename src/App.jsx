import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import HomePage from "./pages/Home";
import {Route, Routes} from "react-router-dom"


function App() { 
  return (
      <div>
        <Navbar/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
  );
}

export default App;



import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from "./NoPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}> </Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Blogs" element={<Blogs/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/NoPage" element={<NoPage/>}></Route>
       </Routes></BrowserRouter>
  );
}

export default App;

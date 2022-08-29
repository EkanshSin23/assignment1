

import Pageone from "./pages/pageone/Pageone";
import Pagefive from "./pages/pagefive/Pagefive";
import Pagefour from "./pages/pagefour/Pagefour";
import Pagethree from "./pages/pagethree/Pagethree";
import Pagetwo from "./pages/pagetwo/Pagetwo";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Pageone />} />
        <Route path='/pagetwo' element={<Pagetwo />} />
        <Route path='/pagethree' element={<Pagethree />} />
        <Route path='/pagefour' element={<Pagefour />} />
        <Route path='/pagefive' element={<Pagefive />} />

      </Routes>
    </>

  );
}

export default App;

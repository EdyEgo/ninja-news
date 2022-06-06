import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './header/NavBar'

import ClientHome from "./ClientHome";

interface ClientAreaProps {}

const ClientArea: React.FC<ClientAreaProps> = () => {
  return (
    <>
      <Router>
        <header className="">
          <NavBar />
        </header>

        <Routes>
          {/* <Route path="/" element={<div>ss</div>} /> */}
         <Route path="/" element={<ClientHome/>}></Route>
        </Routes>
      </Router>
    </>
  );
};
 
export default ClientArea;
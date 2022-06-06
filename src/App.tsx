import ClientAreaLayout from './components/layouts/ClientArea'
import ClientArea from './components/client-area'


import './App.css';
import { useDispatch } from "react-redux";


import "./styles/signButtons.css";


function App() {


 const dispatch = useDispatch()


  return (
    <div className="App ">
     
     

 
      
       
        <ClientAreaLayout >
        <ClientArea/>
        </ClientAreaLayout>
   

      

     
     
    
    </div>
    
  );
}

export default App;
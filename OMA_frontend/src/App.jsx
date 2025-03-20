import { useState , useEffect } from "react";
import ordersServices from "./services/ordersServices";
import OrdersTable from "./components/OrdersTable";
import Navbar from "./components/Navbar";

const App = () => {
  
  const [orders , setOrders] = useState([]);

 
  
 
    useEffect(()=>{
      const getOrders = async ()=> {
      const ordersData = await ordersServices.getAll();
      setOrders(ordersData);
     }
     getOrders();
 },[])




  
  


  return (
    <>
      
      <Navbar />
     

      <OrdersTable ordersList={orders} />  
      
    </>
  )
}

export default App

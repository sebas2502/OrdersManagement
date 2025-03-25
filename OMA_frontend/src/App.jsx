import { useState , useEffect, useLayoutEffect } from "react";
import ordersServices from "./services/ordersServices";
import OrdersTable from "./components/OrdersTable";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderForm from "./components/orderForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  
  const [orders , setOrders] = useState([]);
  
  
    const getOrders = async ()=> {
    const ordersData = await ordersServices.getAll();
 
    setOrders([...ordersData]);
   }


 
    useEffect(()=>{
        getOrders();
    },[])

    const handleOrderAdded = () => {
      
      getOrders();
    
    }
  
  


  return (
    <>
      
      <Navbar />
     
      <ToastContainer />
      <OrdersTable ordersList={orders} />
      <OrderForm onOrderAdded={handleOrderAdded} />
      
    </>
  )
}

export default App

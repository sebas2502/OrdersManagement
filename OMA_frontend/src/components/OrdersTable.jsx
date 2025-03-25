import Order from "./Order";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus , faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const OrdersTable = ({ordersList}) => {
    

     return(
        <div className="container">
         <h2 className="text-center mb-2"><strong>Orders</strong></h2>
         <button className="btn btn-success"  data-bs-toggle="modal" data-bs-target="#modalForm" style={{marginBottom:"20px"}}><FontAwesomeIcon icon={faSquarePlus} /></button>
         <table className="table table-primary table-hover shadow">
            <thead className="bg-dark text-white text-center">
               <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Id Customer</th>
                <th>Id Seller</th>
                <th>Created At</th>
                <th>State</th>
                <th>Actions</th>
               </tr>
            </thead>
            <tbody className="text-center">
               {
               ordersList.map((order)=>{
                return(
                    <tr key={order.id_order}>
                        <Order order={order} />
                    </tr>
                )
               })
               }
            </tbody>
         </table>
        </div>
    )
}

export default OrdersTable;
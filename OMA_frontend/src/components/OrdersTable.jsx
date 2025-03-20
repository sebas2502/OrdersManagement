import Order from "./Order";

const OrdersTable = ({ordersList}) => {
    
    return(
        <div className="container">
         <h2 className="text-center mb-2"><strong>Orders</strong></h2>
         <button className="btn btn-success" style={{marginBottom:"20px"}}>+ Add</button>
         <table className="table table-primary table-hover shadow">
            <thead className="bg-primary text-white text-center">
                <th>Id</th>
                <th>Description</th>
                <th>Id Customer</th>
                <th>Id Seller</th>
                <th>Created At</th>
                <th>State</th>
                <th>Actions</th>
            </thead>
            <tbody className="text-center">
               {
               ordersList.map((order)=>{
                return(
                    <tr key={order.id}>
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
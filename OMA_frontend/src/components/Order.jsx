const Order = ({order}) => {
    return(
        <>
            <td>{order.id_order}</td>
            <td>{order.description}</td>
            <td>{order.id_customer}</td>
            <td>{order.id_seller}</td>
            <td>{ new Date(order.created_at).toDateString('es-ES')}</td>
            <td>{order.state}</td>
            <td><button className="btn btn-warning text-white">Update</button> <button className="btn btn-danger text-white">Delete</button></td>
        </>
    )
}

export default Order;
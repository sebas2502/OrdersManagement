import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash , faPenToSquare , faCircleInfo ,faPlus} from '@fortawesome/free-solid-svg-icons';



const Order = ({order}) => {
    return(
        <>
            <td>{order.id_order}</td>
            <td>{order.description}</td>
            <td>{order.id_customer}</td>
            <td>{order.id_seller}</td>
            <td>{ new Date(order.created_at).toDateString('es-ES')}</td>
            <td>{order.state}</td>
            <td>
            <button className="btn btn-sm btn-warning text-white" title="Edit Order"><FontAwesomeIcon icon={faPenToSquare} /></button>            
            <button className="btn btn-sm btn-danger text-white" title="Delete Order"><FontAwesomeIcon icon={faTrash} /></button>
            <button className="btn btn-sm btn-info text-white" title="View detail order"><FontAwesomeIcon icon={faCircleInfo} /></button>
            <button className="btn btn-sm btn-dark text-white" title="Add Produt in Order"><FontAwesomeIcon icon={faPlus} /></button>
            </td>
        </>
    )
}

export default Order;
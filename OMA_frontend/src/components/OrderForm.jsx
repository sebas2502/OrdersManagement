import ordersServices from "../services/ordersServices";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus ,} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';



const OrderForm = ({onOrderAdded}) => {


    const [order , setOrder] = useState({});
    
   
    
   

    const handleForm = async (e) => {
    e.preventDefault();
   
    const dataForm = new FormData(e.target)
    const data = Object.fromEntries(dataForm.entries())
       
    let newOrder = {
      description : data.description,
      id_customer :  data.id_customer,
      id_seller : data.id_seller,
      state : data.state
    }
    
    setOrder(newOrder)
   
    const response = await ordersServices.save(newOrder)

     toast.success('¡Order Saved successfully!',{
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,

     });
  
    
    setOrder({})
    onOrderAdded();
    e.target.reset();

    
    //Code for close modal form 
    const modal = document.getElementById("modalForm");
    const bootstrapModal = bootstrap.Modal.getInstance(modal); 

    if (bootstrapModal) {
      bootstrapModal.hide(); 
    }
  

  }



  return(
      <>
        

      
<div className="modal fade" id="modalForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      
    
      <form onSubmit={handleForm} className="row g-3 bg-white modal-body p-4 shadow rounded">
        <h2 className="text-center fst-italic">Regiser Order</h2>
        <hr />
        <div className="col-md-6">
          <label htmlFor="inputOrder" className="form-label fst-italic">Order Description</label>
          <input type="text" name="description" className="form-control" id="inputOrder" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCustomer" className="form-label fst-italic">Id Customer</label>
          <input type="number" name="id_customer" className="form-control" id="inputCustomer" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputSeller" className="form-label fst-italic">Id Seller</label>
          <input type="number" name="id_seller" className="form-control" id="inputSeller" /> 
        </div>
        <div className="col-md-6">
            <label htmlFor="inputState" className="form-label fst-italic">State</label>
            <select id="inputState" name="state" className="form-select">
              <option className="fst-italic">Confirmed</option>
              <option className="fst-italic">Canceled</option>
            </select>
          </div>
       
           
        <div className="col-12">
        
        </div>
        
        <div className="col-12 d-flex justify-content-start gap-1">
          <button type="submit" className="btn btn-warning text-white shadow">Regsitrar</button>
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn btn-danger text-white shadow">Cancelar</button>
        </div>
      </form>
      
    
    </div>
  </div>
</div>
      </>
    )

}

export default OrderForm;
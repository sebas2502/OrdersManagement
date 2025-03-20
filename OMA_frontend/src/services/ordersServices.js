import axios from 'axios';

const getAll = async () => {
    try {
        const orders = await axios.get('http://localhost:3001/api/orders');
        console.log(orders.data)
        return orders.data;
             
        
    }catch (error) {
        console.error("Error in getting data: " , error.message);
        return []    
    }
}

export default {
    getAll
}
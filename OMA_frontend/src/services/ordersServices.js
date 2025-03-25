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

const save = async (newOrder) => {
    try {
    
        console.log("se intento hacer un post")
        await axios.post('http://localhost:3001/api/orders/',newOrder);
        
    } catch (error) {
        console.log("Error in saving data",error)
    }
}

export default {
    getAll,
    save
}
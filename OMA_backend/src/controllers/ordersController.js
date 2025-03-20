const Order = require('../models/orders');
const Orders = require('../models/orders');

module.exports = {

    getAll : async (req , res) => {
        try {
            const orders = await Orders.findAll();
            res.status(200).json(orders)
        } catch (error) {
            res.json({error : error})
        }
    }
    ,
    getOne : async (req , res) => {
        try {
            const { id } = req.params;
            const order = await Order.findOne({ where: { id_order : id } }); 
            
            if(order){
                res.status(200).json(order)
            }else{
                res.status(404).json({message:"The order does not exists"})
            }

        } catch (error) {
            res.status(500).json({error: "Error in server : ",error})
        }
    }
    ,
    create : async(req , res) => {
        const newOrder = req.body;
        try {
           const insertNewOrder = await Order.create(newOrder);
           if(insertNewOrder){
            res.status(201).json({message : "The order created successfully"})
           }else{
            res.status(409).json({message:"The order already exists in database"})
           }
        } catch (error) {   
            res.status(500).json({error:error})
        }
    }
    ,
    update : (req , res) => {
        res.send("update order...")
    }
    ,
    delete : (req , res) => {
        res.send("delete order...")
    }

}
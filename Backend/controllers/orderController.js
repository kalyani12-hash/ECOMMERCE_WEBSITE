import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


//placing orders using COD Method
const placeOrder = async(req,res) =>{

    console.log('order-started');

    try {
        const {userId,items,amount,address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"cod",
            payment:false,
            date:Date.now()
        }
    
        const newOrder = new orderModel(orderData);
        await newOrder.save();
    
        await userModel.findByIdAndUpdate(userId,{cartData:{}});
        console.log('order placed');
    
        res.json({success:true,message:'Order Placed'})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }

}

//placing orders using Stripe Method
const placeOrderStripe = async(req,res) =>{
    
}


//placing orders using RazorPay Method
const placeOrderRazorpay = async(req,res) =>{
    
}

//All orders data for Admin panel
const allOrders = async(req,res) =>{
    try {
        const orders = await orderModel.find({});
        res.json({success:true,orders});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}


//User order Data for Frontend
const userOrders = async(req,res)=>{

    try {
        const {userId} = req.body;

        const orders = await orderModel.find({userId});
        res.json({success:true,orders});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }

}

//update order status from Admin Panel
const updateStatus = async(req,res)=>{
    try {
        const {orderId , status} = req.body;

        await orderModel.findByIdAndUpdate(orderId , {status});
        res.json({success:true,message:'Status Updated'});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
   
}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus};
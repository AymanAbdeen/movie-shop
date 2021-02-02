import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IOrder } from '../../Models/IOrder';
import './Admin.scss';
import Footer from "../Footer/Footer";


export default function Admin() {

    const defaultOrder:IOrder[] = [];
    const [orders, setOrders] = useState(defaultOrder);


    useEffect(()=>{

        axios.get('https://localhost:5001/movies/ordars/')
        .then(result=>{
            setOrders(result.data);
        })
    },[]);

    async function deleteOrder(id:number) {
        axios.delete(`https://localhost:5001/movies/ordars/${id}`)
        .then(result=>{
                console.log(result);
                const filteredOrders = orders.filter(item => item.id !== id);
                setOrders(filteredOrders);
        });
        
    }

    let orderHtml = orders.map((order:IOrder)=>{
        return(
            <div key={order.id}>
                <p> Your order number is: {order.id} </p>
                <p> Create by: {order.createdBy} </p>
                <p> TotalPrice: {order.totalPrice} </p>
                <p> Created: {order.created} </p>
                <button type='button' className="btn btn-danger btn-lg" onClick={()=>deleteOrder(order.id)}>Remove Order</button>
                <p></p>
                <p>----------------------</p>
            </div>
        )
    })




    return (
        <React.Fragment>
            <div>
                <div className="Admin-section">
                    <h1>Welcome Admin on your check out page</h1>
                    <p> </p>
                    <div>
                        {orderHtml}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </React.Fragment>

    );
}
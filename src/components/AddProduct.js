import React from "react";
import { useState } from "react";

const AddProduct=()=>{
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[company,setCompany]=useState("");

    const consoleData=()=>{
        console.log(name,price,category,company)
    }
    


    return(
        <div className="addProduct">
            <h1>Add Product</h1>

            <input type="text" placeholder="Enter Name" className="inputBox"
            value={name} onChange={(e)=>setName(e.target.value)}
            />

            <input type="text" placeholder="Enter Price" className="inputBox"
            value={price} onChange={(e)=>setPrice(e.target.value)}
            />

            <input type="text" placeholder="Enter Category" className="inputBox"
            value={category} onChange={(e)=>setCategory(e.target.value)}
            />

            <input type="text" placeholder="Enter Company" className="inputBox"
            value={company} onChange={(e)=>setCompany(e.target.value)}
            />

            <button type="button" className="appButton"
            onClick={consoleData}>
                
                Add Product</button>
        </div>
    )
}
export default AddProduct;
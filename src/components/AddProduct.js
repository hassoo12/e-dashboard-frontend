import React from "react";
import { useState } from "react";


const AddProduct=()=>{
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[company,setCompany]=useState("");
    const [error,setError]=useState(false)

    const addProduct=async()=>{
        if(!name || !price || !category ||!company){
            setError(true)
            return false;
        }
        console.log(name,price,category,company);
        const userId = localStorage.getItem("user")._id;
        let result= await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
    }
    


    return(
        <div className="addProduct">
            <h1>Add Product</h1>

            <input type="text" placeholder="Enter Name" className="inputBox"
            value={name} onChange={(e)=>setName(e.target.value)}
            />
            {error && !name && <span className="invalid-input"> Enter valid name 
            </span>}
    

            <input type="text" placeholder="Enter Price" className="inputBox"
            value={price} onChange={(e)=>setPrice(e.target.value)}
            />
            {error && !price &&<span className="invalid-input"> Enter valid price 
            </span>}

            <input type="text" placeholder="Enter Category" className="inputBox"
            value={category} onChange={(e)=>setCategory(e.target.value)}
            />
            {error && !category &&<span className="invalid-input"> Enter valid category 
            </span>}

            <input type="text" placeholder="Enter Company" className="inputBox"
            value={company} onChange={(e)=>setCompany(e.target.value)}
            />
            {error && !company &&<span className="invalid-input"> Enter valid company 
            </span>}

            <button type="button" className="appButton"
            onClick={addProduct}>
                
                Add Product</button>
        </div>
    )
}
export default AddProduct;
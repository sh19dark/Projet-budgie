import mon from "./Money-Saving3.jpg";
import table from "./51223610595_ee509b3ee2_b.jpg";
import React, { useState } from 'react';
import './salaire.css';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import "./header.css";


const Salaire=()=>{
    const[purchase,setPurchase]=useState([])
    const[idSalary,setId]=useState()
    const[Cat,setCat]=useState("")
    const[Iname,setItem]=useState("")
    const[price,setPrice]=useState(0)
    const[dt,setDt]=useState("")
    const[tabpr,setPr]=useState([])
    const[tabpr1,setPr1]=useState([0,0,0,0,0,0,0,0,0])
    const[tabdate,setDate]=useState([])
    const addPurchase = () => {
        
            setPurchase(purchase => [...purchase, {idSalary,Iname,Cat,price,dt}])
            setId(idSalary=>idSalary-price)
            setPr(tabpr => [...tabpr, price])
            setDate(tabdate=>[...tabdate,dt])
            tabpr1[8]=idSalary-price;
             tabpr1[labels2.indexOf(Cat)]+=parseFloat(price);
             console.log(tabpr1)

    }
   
    const labels = tabdate;

    const data = {
    labels: labels,
    datasets: [
        {
        label: "le budget",
        backgroundColor: "green",
        borderColor: "green",
       color:"white",
        
        data: tabpr,
        },
    ],
    };
    const labels2 = ["Housing","Transporation","Food","Utilities","Insurance","Medical and health care","Clothes","Saving","Salary"];

    const data2 = {
        labels: labels2,
        datasets: [
          {
            label: "# of Votes",
            data: tabpr1,
            backgroundColor: [
              "#007d9cc8",
              "#244c70c0",
              "#d123b4b7",
              "#f7e118b2",
              "rgba(0, 206, 41, 0.66)",
              "#6c0e00ab",
              "#a45117bc",
              "#ea9effbe",
              "#28cda479",
            ],
            borderColor: [
              "rgba(255, 99, 133, 0.71)",
              "rgba(54, 163, 235, 0.785)",
              "rgba(255, 207, 86, 0.801)",
              "rgba(111, 194, 55, 0.767)",
              "rgba(153, 102, 255, 0.733)",
              "rgba(125, 49, 21, 0.749)",
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <div className="budget_body">
            <div className="header">
              <div className="container">
                  <h1>Budget Traker App</h1>
                  <div>
                     <input id="salaire" name="salaire" className="input" placeholder="Enter your budget" value={idSalary} onChange={(e) => setId(e.target.value)} required/>
                     <button className="btn"><a href="#budget">add</a></button>
                 </div>
            </div>
            </div>

            <div className='budget' id="budget">
                <label className="label">Item Name</label><br/>
                <input type="text" id="Iname" name="Iname" value={Iname} onChange={(e) => setItem(e.target.value)} required/><br/>
                <label className="label">Category</label><br/>
                <select id="cat" name="cat" value={Cat} onChange={(e) => setCat(e.target.value)} required><br/>
                    <option value={"Housing"}>Housing</option>
                    <option value={"Tronsporation"}>Transporation</option>
                    <option value={"Food"}>Food</option>
                    <option value={"Utilities"}>Utilities</option>
                    <option value={"Insurance"}>Insurance</option>
                    <option value={"Medical"}>Medical and health care</option>
                    <option value={"Clothes"}>Clothes</option>
                    <option value={"Saving"}>Saving</option>
                </select><br/>
                <label className="label">Price</label><br/>
                <input className="input" type="number" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required /><br/>
                <label className="label">Date</label><br/>
                <input className="input" type="date" id="dt" name="dt" value={dt} onChange={(e) => setDt(e.target.value)} required/><br/>
                <button onClick={addPurchase} className="btn"><a href="#table">Add</a></button>  <br/>
            </div>

            <div className="information">
                <table id="table2">
                   <td>Item Name</td>
                   <td>Category</td>
                   <td>Price</td>
                   <td>Date</td>
                   <td>The Rest</td>
                </table>
            {purchase.map((pur,index) => <div key={index} className='purchase'> 
                    <table  id="table">
                        <td>{pur.Iname}</td>
                        <td>{pur.Cat}</td>
                        <td>{pur.price}</td>
                        <td>{pur.dt}</td>
                        <td>{pur.idSalary-pur.price}</td>
                        
                    </table>
                        
                    </div> )}
                    <div className="Line">
                    <Line data={data}  />
                    </div>
                    <div className="Pie">
                        <Pie data={data2}/>
                    </div>
            </div>
        </div>
    )
}
export default Salaire;
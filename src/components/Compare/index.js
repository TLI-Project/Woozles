import React, { useState, useEffect } from 'react'
import blueEllipse from '../../img/landing/background/Ellipse-blue.png';
import greenEllipse from '../../img/landing/background/Ellipse-green.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Graph1Model, Graph2Models, Graph3Models, Graph4Models } from "./depreciation";
import { GraphCapitalOneModel, GraphCapitalTwoModels, GraphCapitalThreeModels, GraphCapitalFourModels } from "./ammoritization"

const Compare = () => {
    //passing states:
    const location = useLocation();
    const { state } = location;
    const finance = state.inputData;
    const carList = state.selected;
    console.log(carList)
    console.log(finance)

    //****/carDepreciation 
    // returns a list of 10 values, where each one is the percentage of total value remaining responding to year


    // useEffect(() => {
    //     const fetchCarMeta = async () => {
    //         for (let i = 0; i < carList.length; i++) {

                // const requestOptions = {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: parseInt(carList[i])
                // };
    //             const res = await fetch('http://localhost:8080/carDepreciation', requestOptions);
    //             // const data = await res.json();
    //             console.log(res)
    //         }
           
    //     }
    //     fetchCarMeta();
    // }, [])
    const depreciationRequestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 1
    };

    const inputData = {
        loanAmount: finance.loanAmount,
        pytBudget: finance.monthlyBudget,
        downPayment: finance.downPayment,
        address: finance.address,
        postalCode: finance.postalCode,
        city: finance.city,
        province: finance.province,
        dateOfBirth: finance.dateOfBirth,
        sinNumber: finance.sinNumber
      }

    const loanRequestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: inputData
    };


    // you will just want to put this in a for loop for each id in carList
    useEffect(() => {
        // fetch data

        // const fetchCarDepreciation = async () => {
        //     const res = await fetch('http://localhost:8080/carDepreciation', depreciationRequestOptions);
        //     const data = await res.json();
        //     console.log(data)
        // }
        const fetchCarLoan = async () => {
            const res = await fetch('http://localhost:8080/userCarLoan', loanRequestOptions);
            const data = await res;
            console.log(data)
        }

        fetchCarLoan();
    }, [])

    return(
        <h1>asdf</h1>
    )
    //****/userCarLoan
    // inputs: loanAmount, pytBudget, carID, downPayment, address, postalCode, city, province, dateOfBirth, sinNumber
    // const inputData = {
    //     loanAmount: loanAmount,
    //     pytBudget: monthlyBudget,
    //     downPayment: downPayment,
    //     address: address,
    //     postalCode: postalCode,
    //     city: city,
    //     province: province,
    //     dateOfBirth: dateOfBirth,
    //     sinNumber: sinNumber
    //   }

    // const allRequestOptions = {
    //     method: "PUT",
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(inputData)
    // };

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     fetch('http://localhost:8080/userCarLoan', allRequestOptions)
    //         .then(response => console.log(response.json()))
    // }


    //*****How to access the financial information:*****
    //Address: finance.address
    //loanAmount: finance.loanAmount,
    //monthlyBudget: finance.monthlyBudget,
    //downPayment: finance.downPayment 
    //etc.

    //*****How to access the list of cars selected by user:*****
    //whole list of cars: carList
    //first car: carList[0]
    //...etc


//     if (carList.length === 1) {
//         //Depreciation
//         var modelD = { "depreciation": carList[0].depreciation, "listPrice": carList[0].listPrice, "model": carList[0].model }
//         // Ammoritization
//         var modelA = { "remain": carList[0].remain, "model": carList[0].model }
//         return (
//             <div className="page page-compare">
//                 <img className="ellipse-blue" src={blueEllipse} />
//                 <img className="ellipse-green" src={greenEllipse} />
//                 <div className="graphContainer" id="graphContainer ">
//                     <div className="section-container instruction-container">
//                         <div className='detail-right'>
//                             <div className="row">
//                                 <div className="rightcolumn">
//                                     <h2>Depreciation Graph</h2>
//                                     <p>Depreciation is the difference between a car's value when you buy it and when you
//                                         come to sell it.
//                                         This drop in value varies between makes and models and the depreciation of each
//                                         model is depicted
//                                         on the graph for each year of ownership.</p>
//                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
//                                         graph </p>
//                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>


//                                 </div>

//                                 <div className="leftcolumn"><h2>Ammoritization Graph</h2>
//                                     <p>
//                                         Amortization describes the process of gradually paying off your auto loan. In an
//                                         amortizing loan,
//                                         for each of your monthly payments, a portion is applied towards the amount of
//                                         the loan – the
//                                         principal – and a portion of the payment is applied towards paying the finance
//                                         charge –
//                                         the interest.</p>
//                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
//                                         graph </p>
//                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>


//                 </br>
//                 <Graph1Model model={modelD} />
//                 <GraphCapitalOneModel model={modelA} />



//             </div>

//         )
//     }
//     else if (carList.length === 2) {
//         var modelD1 = {
//             "depreciation": carList[0].depreciation, "listPrice": carList[0].listPrice,
//             "model": carList[0].model
//         }
//         var modelD2 = {
//             "depreciation": carList[1].depreciation, "listPrice": carList[1].listPrice,
//             "model": carList[1].model
//         }
//         var modelA1 = { "remain": carList[0].remain, "model": carList[0].model }
//         var modelA2 = { "remain": carList[1].remain, "model": carList[1].model }
//         return (
//             <div className="page page-compare">
//                 <img className="ellipse-blue" src={blueEllipse} />
//                 <img className="ellipse-green" src={greenEllipse} />
//                 <div className="graphContainer" id="graphContainer ">
//                     <div className="section-container instruction-container">
//                         <div className='detail-right'>
//                             <div className="row">
//                                 <div className="rightcolumn">
//                                     <h2>Depreciation Graph</h2>
//                                     <p>Depreciation is the difference between a car's value when you buy it and when you
//                                         come to sell it.
//                                         This drop in value varies between makes and models and the depreciation of each
//                                         model is depicted
//                                         on the graph for each year of ownership.</p>
//                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
//                                         graph </p>
//                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>


//                                 </div>

//                                 <div className="leftcolumn"><h2>Ammoritization Graph</h2>
//                                     <p>
//                                         Amortization describes the process of gradually paying off your auto loan. In an
//                                         amortizing loan,
//                                         for each of your monthly payments, a portion is applied towards the amount of
//                                         the loan – the
//                                         principal – and a portion of the payment is applied towards paying the finance
//                                         charge –
//                                         the interest.</p>
//                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
//                                         graph </p>
//                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>


//                 </br>
//                 <Graph2Models model1={modelD1} model2={modelD2} />
//                 <GraphCapitalTwoModels model1={modelA1} model2={modelA2} />



//             </div>

//         )
//     }
//     else if (carList.length === 3) {
//         var modelD1 = {
//             "depreciation": carList[0].depreciation, "listPrice": carList[0].listPrice,
//             "model": carList[0].model
//         }
//         var modelD2 = {
//             "depreciation": carList[1].depreciation, "listPrice": carList[1].listPrice,
//             "model": carList[1].model
//         }
//         var modelD3 = {
//             "depreciation": carList[2].depreciation, "listPrice": carList[2].listPrice,
//             "model": carList[2].model
//         }
//         var modelA1 = { "remain": carList[0].remain, "model": carList[0].model }
//         var modelA2 = { "remain": carList[1].remain, "model": carList[1].model }
//         var modelA3 = { "remain": carList[2].remain, "model": carList[2].model }
//         return (
//             <div className="page page-compare">
//                 <img className="ellipse-blue" src={blueEllipse} />
//                 <img className="ellipse-green" src={greenEllipse} />
//                 <div className="graphContainer" id="graphContainer ">
//                     <div className="section-container instruction-container">
//                         <div className='detail-right'>
//                             <div className="row">
//                                 <div className="rightcolumn">
//                                     <h2>Depreciation Graph</h2>
//                                     <p>Depreciation is the difference between a car's value when you buy it and when you
//                                         come to sell it.
//                                         This drop in value varies between makes and models and the depreciation of each
//                                         model is depicted
//                                         on the graph for each year of ownership.</p>
//                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
//                                         graph </p>
//                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>


//                                 </div>

//                                 <div className="leftcolumn"><h2>Ammoritization Graph</h2>
//                                     <p>
//                                         Amortization describes the process of gradually paying off your auto loan. In an
//                                         amortizing loan,
//                                         for each of your monthly payments, a portion is applied towards the amount of
//                                         the loan – the
//                                         principal – and a portion of the payment is applied towards paying the finance
//                                         charge –
//                                         the interest.</p>
//                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
//                                         graph </p>
//                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>


//                 </br>
//                 <Graph3Models model1={modelD1} model2={modelD2} model3={modelD3} />
//                 <GraphCapitalThreeModels model1={modelA1} model2={modelA2} model3={modelA3} />



//             </div>

//         )
//     }
//     else {
//         var modelD1 = {
//             "depreciation": carList[0].depreciation, "listPrice": carList[0].listPrice,
//             "model": carList[0].model
//         }
//         var modelD2 = {
//             "depreciation": carList[1].depreciation, "listPrice": carList[1].listPrice,
//             "model": carList[1].model
//         }
//         var modelD3 = {
//             "depreciation": carList[2].depreciation, "listPrice": carList[2].listPrice,
//             "model": carList[2].model
//         }
//         var modelD4 = {
//             "depreciation": carList[3].depreciation, "listPrice": carList[3].listPrice,
//             "model": carList[3].model
//         }
//         var modelA1 = { "remain": carList[0].remain, "model": carList[0].model }
//         var modelA2 = { "remain": carList[1].remain, "model": carList[1].model }
//         var modelA3 = { "remain": carList[2].remain, "model": carList[2].model }
//         var modelA4 = { "remain": carList[3].remain, "model": carList[3].model }
//         return (
//             <div className="page page-compare">
//                 <img className="ellipse-blue" src={blueEllipse} />
//                 <img className="ellipse-green" src={greenEllipse} />
//                 <div className="graphContainer" id="graphContainer ">
//                     <div className="section-container instruction-container">
//                         <div className='detail-right'>
//                             <div className="row">
//                                 <div className="rightcolumn">
//                                     <h2>Depreciation Graph</h2>
//                                     <p>Depreciation is the difference between a car's value when you buy it and when you
//                                         come to sell it.
//                                         This drop in value varies between makes and models and the depreciation of each
//                                         model is depicted
//                                         on the graph for each year of ownership.</p>
//                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
//                                         graph </p>
//                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>


//                                 </div>

//                                 <div className="leftcolumn"><h2>Ammoritization Graph</h2>
//                                     <p>
//                                         Amortization describes the process of gradually paying off your auto loan. In an
//                                         amortizing loan,
//                                         for each of your monthly payments, a portion is applied towards the amount of
//                                         the loan – the
//                                         principal – and a portion of the payment is applied towards paying the finance
//                                         charge –
//                                         the interest.</p>
//                                     <p>-Toggle on each model's name at the bottom to remove it's data from the
//                                         graph </p>
//                                     <p>-Hover above datapoints (circles on the graph) for further insights</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <br>


//                 </br>
//                 <Graph3Models model1={modelD1} model2={modelD2} model3={modelD3} model4={modelD4} />
//                 <GraphCapitalThreeModels model1={modelA1} model2={modelA2} model3={modelA3} model4={modelA4} />



//             </div>

//         )
//     }
}


export default Compare


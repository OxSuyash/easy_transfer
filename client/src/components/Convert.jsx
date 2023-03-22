import React from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import "../styles/Convert.css"
const { ethers } = require("ethers")

const Convert = () => {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const reset1 = () => {
        setOutput("")
    }
    const reset2 = () => {
        setInput("")
        setOutput("")
    }
    // const nothing = () => {
    // }
    const handelChange = (event) => {
        const newText = event.target.value;
        // console.log(newText)
        setInput(newText)
        // const wei = ethers.utils.parseUnits(input, "ether");
        // // console.log(wei)
        // setOutput(wei)
        reset1();
    }
    const calculate = () => {
        const wei = ethers.utils.parseUnits(input, "ether");
        // console.log(wei)
        setOutput(wei)
    }

    // useEffect(()=>{
    //     const updateInput = (event) =>{
    //         const newText = event.target.value;
    //         setInput(newText)
    //         const wei = ethers.utils.parseUnits(input, "ether");
    //         setOutput(wei)
    //     }
    //     updateInput();
    // },[input])

    // const convert = () => {
    //     const input = document.querySelector("#eth");
    //     const wei = ethers.utils.parseUnits(input, "ether");
    //     console.log(wei)
    //     // setOutput(wei);
    // }

    return (
        <div className='convert-container'>
            <div id="form3">
                <h2>Convert ETH to wei</h2>
                <div id='conv3'>
                    <div id="conv1">
                        <p>ETH</p>
                        <input
                            type="text"
                            id="eth"
                            // placeholder="ETH here"

                            onChange={handelChange}
                            value={input}
                        />
                    </div>
                    <button id="btn3" onClick={calculate}>toWEI</button>
                </div>
                <div id="conv4">
                    <div id="conv2">
                        <p>WEI</p>
                        <input
                            type="text"
                            id="eth"
                            value={output}
                        />
                    </div>
                    <button id="btn4" onClick={reset2}>Clear</button>

                </div>
            </div>

        </div>
    )
}

export default Convert

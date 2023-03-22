import React from 'react'
import "../styles/Send.css"
import { Link } from 'react-router-dom'


const Send = ({ state }) => {
    const send = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const to = document.querySelector("#to").value;

        const amount = { value: document.querySelector("#amount").value }
        try{
            const transaction = await contract.sendWEI1(to, amount);
        await transaction.wait();
        alert("Transaction is successful")
        // window.location.reload()

        }catch(error){
            alert(error)
        }

        // console.log(to,contract,amount);
        // const _amount = { value: ethers.utils.parseEther("0.001") };
        // const transaction = await contract.buyChai(name, message, amount);
        // await transaction.wait();
        // console.log("Transaction is done");
    };
    return (
        <div className='main-container' >

            <div className='send-container'>
                <form onSubmit={send} id="form">
                    <h2>Transfer less than 0.5 ETH</h2>

                    <input
                        type="text"
                        className="form-control"
                        id="to"
                        placeholder="Enter address of the recipient"
                        required
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="amount"
                        placeholder="Enter amount only in wei"
                        required
                    />
                    <button id='btn1' type='submit' disabled={!state.contract}>Transfer </button>
                    <hr />
                    <Link to="/sendbig"><button id='btn2'>Transfer more than 0.5 ETH</button></Link>
                    
                </form>
            </div>
        </div>
    )
}

export default Send

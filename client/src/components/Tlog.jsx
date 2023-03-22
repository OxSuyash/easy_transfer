import React from 'react'
import "../styles/Tlog.css"
import { useState, useEffect } from "react";

const Tlog = ({ state }) => {
  const [tLog, setTLog] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const txnList = async () => {
      const txns = await contract.displayList();
      // console.log(txns)
      setTLog(txns);
    };
    contract && txnList();
  }, [contract]);
  return (
    <div className="Tlog-container">
      <h3>Transaction Log</h3>
      {tLog.map(txn => {
        return (
          
          <div id='tab' key={txn.id}>
            <table>
            
              <tbody>
                
                <tr>
                <td><p>Txn Id:</p><p id='info'>{String(txn.id)}</p></td>
                  <td><p>Sender:</p><p id='info'>{txn.from}</p></td>
                  <td><p>Recipient:</p><p id='info'>{txn.to}</p></td>
                  <td><p>Amount(Wei):</p><p id='info'>{String(txn.amount)}</p></td>
                  <td><p>Time:</p><p id='info'>{String(new Date(txn.timestamp * 1000).toLocaleString())}</p></td>
                </tr>
              </tbody>
            </table>

          </div>
        )
      })}
    </div>
  )
}

export default Tlog

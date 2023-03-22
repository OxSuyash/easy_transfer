import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className="main">
    <div className='footer-container'>
      <div className="main1">
        <h3>About easy &harr;Transfer</h3>
        <p>Easy Transfer is a smart contract based decentralized application which helps users to send ethers to recipient address. Users have to give amount value in terms of wei. Easy Transfer provides a facility to convert ethers value into wei value in the convert section. When the transaction is successfully completed, the transaction history is stored securely on the blockchain. Users can check the transaction history in transaction log section. As a part of transaction fees, a small fraction of amount is sent to the owner of contract.</p>
      </div>
      <div className="main2">
        <h3>About the <em>Dev</em> </h3>
        <a href="https://www.linkedin.com/in/oxsuyash/" target="blank"><button>LinkedIn</button></a>
        <a href="https://twitter.com/OxSuyash/" target="blank"><button>Twitter</button></a>
        <a href="https://github.com/OxSuyash/" target="blank"><button>Github</button></a>
      </div>
     
    </div>
    <div id='cpy'>
      <p>copyrights &copy;  2023 easy &harr;Transfer</p>
    </div>
    </div>
  )
}

export default Footer

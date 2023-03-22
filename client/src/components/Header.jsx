import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.css"

const Header = ({connectWallet,connectText}) => {
   
    return (
        <nav>
            <h1><Link to="/">easy&harr;Transfer</Link> </h1>
            <div className="menu">
                <ul>
                    <li><Link to="/" className='items'>Home</Link></li>
                    <li><Link to="/convert" className='items'>Convert</Link></li>
                    <li><Link to={"/send"} className='items'>Send </Link></li>
                    <li><Link to="/history" className='items'>Transaction Log</Link></li>
                    <li><Link to="/" className='items'><button onClick={connectWallet}>{connectText}</button></Link></li>
                </ul>
            </div>
            {/* <div className="connect">
            <li><p>Connected Wallet: {connectText}</p></li>
            </div> */}
        </nav>
    )
}

export default Header;


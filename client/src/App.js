import abi from "./contract/Transfer.json"
import { useState } from "react"
import './App.css';
import { ethers } from "ethers"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Send from "./components/Send";
import Tlog from "./components/Tlog";
import SendBig from "./components/SendBig";
import Convert from "./components/Convert";


function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [connectText, setConnectText] = useState("Wallet not connected. Click to connect")

  // useEffect(() => {
  const connectWallet = async () => {
    const contractAddress = "0xA749546a094bfDCA1D0d97c5786f34B9C5782F49";
    const contractABI = abi.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({ method: "eth_requestAccounts", })
        setConnectText(account)

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        })
        window.ethereum.on("accountChanged", () => {
          window.location.reload();
        })
        
        const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      setState({ provider, signer, contract })
      }
      else{
        alert("Please install Metamask")
      }
    } catch (error) {
      console.log(error)
    }
  }
  // connectWallet();
  // }, [])
  console.log(state)
  return (
    <>
      <Router>
        <Header connectWallet={connectWallet} connectText={connectText} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<Send state={state} />} />
          <Route path="/history" element={<Tlog state={state} />} />
          <Route path="/sendbig" element={<SendBig state={state} />} />
          <Route path="/convert" element={<Convert />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

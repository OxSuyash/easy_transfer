//SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 <0.9.0;

contract Transfer {
    address payable owner;
    uint txnId=1;
    struct Log{
        uint id;
        address from;
        address to;
        uint amount;
        uint timestamp;
    }
    constructor() {
        owner = payable(msg.sender);
    }

    Log[] list;

    function sendWEI1(address payable to) public payable {
        require(
            msg.value < 500000000000000000,
            "You can not send more than 0.5 ETH here. We have provided another gateway to transfer more than 0.5 ETH"
        );
        require((msg.sender).balance>msg.value,"Insufficient balance in your account");
        uint256 fees = (msg.value)*1/100;
        uint256 amount = msg.value - fees;
        payable(to).transfer(amount);
        payable(owner).transfer(fees);

        list.push(Log(txnId,msg.sender,to,msg.value,block.timestamp));
        txnId++;
    }

    function sendWEI2(address payable to) public payable {
        require(
            msg.value >= 500000000000000000,
            "You can not send less than 0.5 ETH here. We have provided another gateway to transfer less than 0.5 ETH"
        );
        require((msg.sender).balance>msg.value,"Insufficient balance in your account");
        uint256 fees = (msg.value)*2/100;
        uint256 amount = msg.value - fees;
        payable(to).transfer(amount);
        payable(owner).transfer(fees);
 
        list.push(Log(txnId,msg.sender,to,msg.value,block.timestamp));
        txnId++;
    }

    function displayList() public view returns(Log[] memory) {
        return list;
    }

}

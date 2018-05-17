pragma solidity ^0.4.4;


contract Remittance {

  mapping (address => uint) public balances;

  /* // events are triggere within functions
  event remittanceCreated(address recipient, uint value); // add a a deadline later
  event remittanceWithdrawn(address recipient, uint value);
  // Create a cancelled event later */

  address public owner;

  constructor() {
    owner = msg.sender;
  }

  function getBalance(address addr) public returns(uint) {
    return balances[addr];
  }

  function completeTransaction(address addr) public payable returns(uint) {
    // take the owner
  }

  /* function withdrawFunds(address addr) public returns(bool) {

    return true;
  } */
}

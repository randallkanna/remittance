pragma solidity ^0.4.4;


contract Remittance {

  mapping (address => uint) public balances;

  /* // events are triggere within functions
  event remittanceCreated(address recipient, uint value); // add a a deadline later
  event remittanceWithdrawn(address recipient, uint value);
  // Create a cancelled event later */

  address public owner;

  constructor() {
    /* owner = msg.sender; */
  }

  function createRemittance() {
    // create a
  }

  function withdrawRemittance() {
    
  }


  /* function cancelRemittance() {

  } */

  /* function getBalance(address addr) public returns(uint) {
    return balances[addr];
  } */

  /* function completeTransaction(uint transferAmount, address ) public payable returns(bool) {
    // take the owners funds and withdraw the transfer amount. hold the funds
     return true;
  } */
}

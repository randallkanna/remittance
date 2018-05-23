pragma solidity ^0.4.4;


contract Remittance {
  // TODO: refactor to use a struct later
  /* struct RemittanceFunds {
    address owner;
    address addressToBePaid;
    uint amount;
  } */

  mapping (address => uint) public balances;

  address public owner;
  uint public amountToSend;
  bytes32 private puzzleSolution;

  constructor() {
    owner = msg.sender;
  }

  function createRemittance(bytes32 _puzzleSolution) payable returns(bool) { // bytes32 _puzzleSolution,
    // TODO: refactor: create the struct representing the remittance later
    require(msg.value > 0);
    amountToSend = msg.value;
    puzzleSolution = _puzzleSolution;

    return true;
  }

  function completeRemittance() {
    owner.transfer(amountToSend);
  }

  // TODO: add a feature to allow original person to cancel transaction
  /* function cancelRemittance() {
  } */
}

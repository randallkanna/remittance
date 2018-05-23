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
  address public recipient;
  uint public amountToSend;
  bytes32 private puzzleSolution;

  constructor() {
    owner = msg.sender;
  }

  function createRemittance(address _recipient, bytes32 _puzzleSolution) payable {
    // TODO: refactor: create the struct representing the remittance later
    require(msg.value > 0);
    amountToSend = msg.value;
    recipient = _recipient;
    puzzleSolution = _puzzleSolution;
  }

  function completeRemittance() {
    msg.sender.transfer(amountToSend);
  }

  // TODO: add a feature to allow original person to cancel transaction
  /* function cancelRemittance() {
  } */
}

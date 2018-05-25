pragma solidity ^0.4.4;


contract Remittance {
  struct RemittanceFunds {
    address owner;
    address recipient;
    uint amountToSend;
    bytes32 puzzleSolution;
  }

  mapping (address => uint) public balances;
  mapping(bytes32 => RemittanceFunds) remittances;

  address public owner;
  /* address public recipient; */
  /* uint public amountToSend; */
  /* bytes32 private puzzleSolution; */
  /* bytes32 private userPuzzleSolution; */

  constructor() {
    owner = msg.sender;
  }

  function createRemittance(address _recipient, bytes32 _puzzleSolution) payable {
    require(msg.value > 0);
    remittances[_puzzleSolution] = RemittanceFunds(msg.sender, _recipient, msg.value, _puzzleSolution);
  }

  function completeRemittance(bytes32 _userPuzzleSolution) returns (bool){
    RemittanceFunds memory remittance = remittances[_userPuzzleSolution];

    uint amountOwed = remittance.amountToSend;

    require(_userPuzzleSolution == remittance.puzzleSolution);

    msg.sender.transfer(amountOwed);

    return true;
  }

  // TODO: add a feature to allow original person to cancel transaction
  /* function cancelRemittance() {
  } */
}

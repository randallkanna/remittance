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
  bytes32 private userPuzzleSolution;

  constructor() {
    owner = msg.sender;
  }

  function createRemittance(address _recipient, bytes32 _puzzleSolution) payable {
    require(msg.value > 0);
    remittances[_puzzleSolution] = RemittanceFunds(msg.sender, _recipient, msg.value, _puzzleSolution);
  }

  function completeRemittance(bytes32 _userPuzzleSolution) {
    userPuzzleSolution = _userPuzzleSolution;

    RemittanceFunds memory remittance = remittances[userPuzzleSolution];

    /* bytes32 key = keccak256(recipient, keccak256(password)); */
    /* RemittanceStruct memory forSender = remittances[key]; */
     /* RemittanceStruct memory forSender = remittances[key]; */
    /* RemittanceInstance memory r = getInstance(msg.sender,password); */
      /* uint toPay = r.amount; */
    /* RemittanceFunds memory remit = ; */

    /* require(msg.sender == remit.recipient); */
    uint amountOwed = remittance.amountToSend;

    // if the puzzle Solution matches the original puzzle, accept it and allow money out
    msg.sender.transfer(amountOwed);
  }

  // TODO: add a feature to allow original person to cancel transaction
  /* function cancelRemittance() {
  } */
}

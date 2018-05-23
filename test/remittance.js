var Remittance = artifacts.require('../Remittance.sol');

contract('Remittance', function(accounts) {
  var ownerAccount = accounts[0];
  var sendAccount = accounts[1];

  it("should assert true", function(done) {
    var remittance = Remittance.deployed();
    assert.isTrue(true);
    done();
  });

  beforeEach(function() {
    return Remittance.new()
    .then(function(instance) {
      contract = instance;
    });
  });


  it("should withdraw the funds out of the owners account on remittance contract withdrawal", async function() {
    var sendAmount = 1;
    var _puzzleSolution = "abc"

    await contract.createRemittance(_puzzleSolution, { from: ownerAccount, value: sendAmount });

    var ownerAccountOriginalBalance = web3.eth.getBalance(ownerAccount).toNumber();

    let transaction = await contract.completeRemittance();

    var ownerAccountNewBalance = web3.eth.getBalance(ownerAccount).toNumber();
    var tx = await web3.eth.getTransaction(transaction.tx);
    var gasUsed = tx.gasPrice.mul(transaction.receipt.gasUsed).toNumber();

    assert.strictEqual(ownerAccountOriginalBalance - sendAmount - gasUsed, ownerAccountNewBalance, 'should withdraw from owner account');
  });

  it("should transfer to the paidUser after successful remittance", async function() {
      // return true;
  });


  it("should not unlock unless both passwords are correct", async function() {

  });

  //
  // it("should withdraw the funds out of the owners account on remittance contract creation", async function() {
  //   var sendAmount = 0.02;
  //   var senderAccountOriginalAmount = web3.eth.getBalance(sendAccount).toNumber();
  //
  //   var test = await contract.createRemittance({ from: sendAccount, value: 0.02 })
  //   console.log(test);
  //
  // });

  // const bal = web3.eth.getBalance(owner)


  // it("should withdraw funds out of the owners account", async function() {
  //   var sendersAccountOriginalAmount = web3.eth.getBalance(sendAccount).toNumber()
  //   var transferAmount = 0.02;
  //
  //   await contract.completeTransaction(sendAccount, transferAmount) // { value: 0.02, from: sendAccount }
  //
  //   var ownersAccountAfterTransfer = await contract.getBalance.call(sendAccount);
  //
  //   assert.strictEqual(sendersAccountOriginalAmount - 0.02, ownersAccountAfterTransfer, 'should withdraw from owner account');
  // });
});

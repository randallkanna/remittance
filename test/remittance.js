var Remittance = artifacts.require('../Remittance.sol');

contract('Remittance', function(accounts) {
  var ownerAccount = accounts[0];
  var recipientAccount = accounts[1];

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

    await contract.createRemittance(recipientAccount, _puzzleSolution, { from: ownerAccount, value: sendAmount });

    var ownerAccountOriginalBalance = web3.eth.getBalance(ownerAccount).toNumber();

    let transaction = await contract.completeRemittance();

    var ownerAccountNewBalance = web3.eth.getBalance(ownerAccount).toNumber();
    var tx = await web3.eth.getTransaction(transaction.tx);
    var gasUsed = tx.gasPrice.mul(transaction.receipt.gasUsed).toNumber();

    assert.strictEqual(ownerAccountOriginalBalance - sendAmount - gasUsed, ownerAccountNewBalance, 'should withdraw from owner account');
  });

  it("should transfer to the paidUser after successful remittance", async function() {
      var sendAmount = 1;
      var _puzzleSolution = "abc";

      await contract.createRemittance(recipientAccount, _puzzleSolution, {from: ownerAccount, value: sendAmount });

      var recipientAccountOriginalBalance = web3.eth.getBalance(recipientAccount).toNumber();

      let transaction = await contract.completeRemittance(); //TO DO: verify in code that recipient matches original

      var recipientAccountNewBalance = web3.eth.getBalance(recipientAccount).toNumber();

      assert.strictEqual(recipientAccountOriginalBalance + sendAmount, recipientAccountNewBalance, 'should transfer value to recipient address');
  });


  it("should not unlock unless both passwords are correct", async function() {

  });
});

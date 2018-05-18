var Remittance = artifacts.require('../Remittance.sol');

contract('Remittance', function(accounts) {
  var sendAccount = accounts[0];
  // var recipient1 = accounts[1];
  // var recipient2 = accounts[2];

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


  // it("should withdraw funds out of the owners account", async function() {
  //   var sendersAccountOriginalAmount = web3.eth.getBalance(sendAccount).toNumber()
  //   var transferAmount = 0.02;
  //
  //   await contract.completeTransaction(sendAccount, transferAmount) // { value: 0.02, from: sendAccount }
  //
  //   var ownersAccountAfterTransfer = await contract.getBalance.call(sendAccount);
  //
  //   console.log(ownersAccountAfterTransfer);
  //
  //   assert.strictEqual(sendersAccountOriginalAmount - 0.02, ownersAccountAfterTransfer, 'should withdraw from owner account');
  // });
});

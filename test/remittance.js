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


  it("should withdraw funds out of the owners account", async function() {
    const sendersAccount = web3.eth.getBalance(sendAccount).toNumber()

    // await fundRaise.sendTransaction({ value: 1e+18, from: donor })

    // ownersAccount = await contract.getBalance.call(sendAccount);
    console.log(sendersAccount);

    // assert.strictEqual(recipient1PreBalance.toNumber(), 0, 'Recipient 1 should have 0 balance in test start');


  });
});

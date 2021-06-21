const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts, msg) => {
    it("Constructor should set the message correctly", async () => {
        let instance = await HelloWorld.deployed();
        let message = await instance.message();
        assert.equal(message, "Hello world constructor");
    });

    it("Owner should be accounts[0]", async () => {
        let instance = await HelloWorld.deployed();
        let owner = await instance.getOwner();
        assert.equal(owner, accounts[0]);
    });
});

contract("HelloWorld", accounts => {
    // test 2
});

contract("HelloWorld", accounts => {
    // test 3
});

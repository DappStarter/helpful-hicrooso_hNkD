require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth payment cluster include kiwi system tell'; 
let testAccounts = [
"0x2185fca52f739061857c6136772472ef879032c8820295d72708fd55a26322bb",
"0xafbcd11869aa4649f89d37d07aa838303d92821d32572f207ba48b4c2c293876",
"0x027a7cb01dc6bb75feb598134e13243b132b2d59dad72e870f8b51d8c983e9e0",
"0x5cf30d0d067080cce274b1750b23f73580ef0b82bd4cba74a63994603142c690",
"0x031992ff4d9914ebd670f2d4dbd58f4ad5904368f90ea116dca5074106a069fd",
"0x47d2eda9d0ac0f4d5f5a41b2eed52cd97b016aaa676f21f7f4994c3ef4a0f7e2",
"0x499549046b751386ceb42881adf7a293ff1c68597abe449406b9b91b5c5773d1",
"0x1a9931ae1d1d54da4e7a6b9da2dd450cb70ffe8f09bf94ca09799265c42f61be",
"0xbdab5d88303a31461aff3c73c49d0b849511a1574a24f3c67ba8b1a1fd5d13ca",
"0x096a59077f7566bf5a66638b1958e8f6e0428e6e5b481d2059729c2eb9ee004e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


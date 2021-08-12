require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember million gloom kite obscure silk'; 
let testAccounts = [
"0x06366ca2d0b4330032267d318160dff2d5d33132b1327ea973e704f4828f333e",
"0xc1642c7edcf7543a7a8308a615e4afd224060dfdbb88b0deaf4f0961fda72882",
"0x40eed86bb464a9f6681b5cca4d3297e2a269acaf516c713ea7e27f70114bd064",
"0x7873aa69e6eb9b8af4f476ab8314d3566ff6cedfdbe85b996ea2ae82151e4f07",
"0x886b645578110c35fc634d0c29c1c4debfdf43fa6011b07e53f1594e2cf68b3f",
"0x3a8c1e27a628d24691860b924047a5e2af08708cc7198ba64bea6a2644de854f",
"0x8f5aa7ddff4f565610ee893c6a4f1c5c4c41c9a3e93e9a949ce4ab58b782a10e",
"0xd839df40aaf27110e8644134683ddcf5f8327f8677c14dc012c27281a3a75cc8",
"0xc7e115cad4109c78ebfd34d7d220765070180d77ca697382c5214421850bb434",
"0x6d4bc468736a17e15ba464c5942c31538d20373bad842ec216e20f8b74eb004f"
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


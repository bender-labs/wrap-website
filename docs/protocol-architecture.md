# Protocol Architecture

Wrap protocol is made up of different components, both on-chain on the Tezos and Ethereum blockchains and off-chain.

![picture alt](../static/img/docpics/protocolArchitecture.jpg 'wrap protocol architecture')

### Ethereum Smart Contracts:

__Deposit Contract__: multisig contract managed by the Signer Quorum on which users deposit ERC20 tokens to be wrapped. The Deposit Contract also unlocks ERC20 assets during the unwrapping process. The specificity of the Deposit contract is that anyone can call the transfer method, given the proper signatures from the Signers Quorum. Initially, the contract is a 3-of-5 multisig contract.

__$WRAP Issuer__: ​ERC20 token smart contract, used to generate the initial supply of $WRAP.

### Tezos Smart Contracts

__Quorum Contract__: multisig contract managed by the Signers Quorum. Quorum Contract is the only address which can call the mint method of the Minter Contract. Initially, the contract is a 3-of-5 multisig contract.

__Minter Contract__: smart contract which encompasses all the wrapping logic on Tezos (including wrapping fee levels and recipients). It is the only address which can call the mint and burn methods of the wToken Contract.

__wToken Contract__: ​FA2 token contract, which regroups all wTokens on the Tezos blockchain. Mint / Burn methods can only be called by the Minter Contract.

__Fee Contract__: Smart contract on which wrapping and unwrapping fees are sent directly from the wToken Contract. Fee Contract allocates fees based on a preset repartition - that the community of $WRAP holders will be able to change though voting.

__$WRAP Distributor Contract__: Smart contract which manages the distribution of $WRAP tokens to Wrap Protocol participants.

Other components

__Signers Quorum__: ​set of several entities each controlling one key of both the ETH Quorum and the TEZ Quorum. The role of the quorum is to process wrapping and unwrapping transactions, maintain a 1-1 peg between tokens locked on Ethereum and tokens issued on Tezos and add more assets to the list of assets supported by Wrap Protocol. 
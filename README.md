# Multichain SDK

[![License](https://img.shields.io/npm/l/make-coverage-badge.svg)](https://opensource.org/licenses/MIT)
![ts](https://flat.badgen.net/badge/Built%20With/TypeScript/blue)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

```sh
yarn add @thorchain/multichain-sdk
```

## Usage

```
import { Client } from '@thorchain/multichain-sdk'

const client = new Client({ network: 'mainnet', phrase: 'xxx' })

// get binance client
getBncClient(): BncClient;

// get midgard v1 client
getMidgard(): MidgardV1;

// get wallet client
getWallet(): Wallet;

// transfer assets on binance chain
transfer(tx: TxParams): Promise<TxHash>;

// multisend assets on binance chain
multiSend(params: MultiSendParams): Promise<TxHash>;

// swap assets
swap(swap: Swap): Promise<TxHash>;

// add liquidity
addLiquidity(params: AddLiquidityParams): Promise<TxHash>;

// withdraw from liquidity
withdraw(params: WithdrawParams): Promise<TxHash>;
```

### Entities

```
Amount: represent asset/base amount, support calculations, compare, format

Asset: represent any asset in the chain, support sort, format, price, currency

AssetAmount: represent amount of asset, support calculations, unitPrice, totalPrice

Percent: represent percentage of asset

Pool: represent a Pool Information

Price: represent a price of asset, support unit price, amount price, inverted price

Swap: represent all data needed for swap, provide everything for calculations, validation

Liquidity: represent pool liquidity and provide liquidity calculations

Memo: represent a memo and provide get memo utils
```

### TODO

Write unit test

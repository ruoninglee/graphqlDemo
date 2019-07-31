import "reflect-metadata";
import {Field, ObjectType, InputType} from "type-graphql";
import {BigNumberScalar, DateTimeScalar} from "./scalar";
import BigNumber from "bignumber.js";
import {DateTime} from "luxon";

@InputType("TransactionInput")
@ObjectType("TransactionType")
export class Transaction {

    static create(price: BigNumber,
                  timestamp: DateTime): Transaction {
        return Object.assign(new Transaction(),
            {
                price,
                timestamp,
            });
    }

    @Field(type => BigNumberScalar)
    price!: BigNumber;

    @Field(type => DateTimeScalar)
    timestamp!: DateTime;

}

@InputType("BlockInput")
@ObjectType("BlockType")
export class Block {

    static create(id: string,
                  blockNumber: string,
                  txs: Transaction[] = []): Block {
        return Object.assign(new Block(),
            {
                id,
                blockNumber,
                txs,
            });
    }

    @Field()
    id!: string;

    @Field()
    blockNumber!: string;

    @Field(type => [Transaction])
    txs!: Transaction[];

}


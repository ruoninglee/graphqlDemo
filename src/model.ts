import "reflect-metadata";
import {Field, ObjectType} from "type-graphql";
import {BigNumberScalar, DateTimeScalar} from "./scalar";
import {DateTime} from "luxon";
import BigNumber from "bignumber";

@ObjectType()
export class Transaction {

    static create(id: string,
                  price: BigNumber,
                  timestamp: DateTime): Transaction {
        return Object.assign(new Transaction(),
            {
                id,
                price,
                timestamp,
            });
    }

    @Field()
    id!: string;

    @Field(type => BigNumberScalar)
    price!: BigNumber;

    @Field(type => DateTimeScalar)
    timestamp: DateTime;


}

@ObjectType()
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


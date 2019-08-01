import "reflect-metadata";
import {Field, InputType, ObjectType} from "type-graphql";
import {BigNumberScalar, DateTimeScalar, TagMapScalar} from "./scalar";
import BigNumber from "bignumber.js";
import {DateTime} from "luxon";

export class Tag {
    qboJournalEntryId!: string;
    sageLocationId?: string;
    sageClassId?: string;

    [key: string]: string | undefined;

}

@InputType("TransactionInput")
@ObjectType("TransactionType")
export class Transaction {

    static create(price: BigNumber,
                  timestamp: DateTime,
                  note: string,
                  tag: Tag): Transaction {
        return Object.assign(new Transaction(),
            {
                price,
                timestamp,
                note,
                tag,
            });
    }

    @Field(type => BigNumberScalar)
    price!: BigNumber;

    @Field(type => DateTimeScalar)
    timestamp!: DateTime;

    @Field()
    note!: string;

    @Field(type => TagMapScalar)
    tag!: Tag;

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


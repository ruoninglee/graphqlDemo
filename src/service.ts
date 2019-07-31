import {Service} from "typedi";
import {Block, Transaction} from "./model";
import {DateTime} from "luxon";
import BigNumber from "bignumber.js";

@Service()
export class BlockService {
    constructor() {
    }

    mockTxs: Transaction[] = [
        Transaction.create(new BigNumber("123000000"), DateTime.utc()),
        Transaction.create(new BigNumber("123000000"), DateTime.utc()),
        Transaction.create(new BigNumber("123000000"), DateTime.utc()),
    ];
    mockBlocks: Block[] = [
        Block.create("1", "1", this.mockTxs),
        Block.create("2", "2", this.mockTxs),
        Block.create("3", "3", this.mockTxs),
    ];

    async getBlocks(): Promise<Block[]> {
        return this.mockBlocks;
    }

    async saveTx(blockId: string, tx: Transaction): Promise<Transaction> {
        return Transaction.create(tx.price, tx.timestamp);
    }
    
}
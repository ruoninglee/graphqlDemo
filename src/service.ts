import {Service} from "typedi";
import {Block, Transaction} from "./model";
import {DateTime} from "luxon";

@Service()
export class BlockService {
    constructor() {
    }

    mockTxs: Transaction[] = [
        Transaction.create("1", "123000000", new Date()),
        Transaction.create("2", "123000000", new Date()),
        Transaction.create("3", "123000000", new Date()),
    ];
    mockBlocks: Block[] = [
        Block.create("1", "1", this.mockTxs),
        Block.create("2", "2", this.mockTxs),
        Block.create("3", "3", this.mockTxs),
    ];

    async getBlocks(): Promise<Block[]> {
        return this.mockBlocks;
    }

    async saveTx(blockId: string, price: number): Promise<Block> {
        return new Block();
    }
}
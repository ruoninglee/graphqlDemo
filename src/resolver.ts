import "reflect-metadata";
import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {BlockService} from "./service";
import {Block, Tag, Transaction} from "./model";

@Resolver()
export class BlockResolver {
    constructor(readonly graphqlService: BlockService) {
    }


    @Query(returns => [Block])
    async blocks(
        @Arg("limit", {defaultValue: 10}) limit: number): Promise<Block[]> {
        return this.graphqlService.getBlocks();
    }

    @Mutation(returns => Transaction)
    async createTx(
        @Arg("blockId") blockId: string, @Arg("tx") tx: Transaction): Promise<Transaction> {
        return this.graphqlService.saveTx(blockId, tx);
    }

}

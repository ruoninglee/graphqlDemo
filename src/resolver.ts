import "reflect-metadata";
import {Arg, Query, Resolver} from "type-graphql";
import {BlockService} from "./service";
import {Block} from "./model";

@Resolver()
export class BlockResolver {
    constructor(readonly graphqlService: BlockService) {
    }


    @Query(returns => [Block])
    async blocks(
        @Arg("limit", {defaultValue: 10}) limit: number): Promise<Block[]> {
        return this.graphqlService.getBlocks();
    }

    // @Query(returns => Block)
    // async addTxn(
    //     @Arg("blockId") blockId: string, @Arg("txPrice") txPrice: number): Promise<Block> {
    //     return this.graphqlService.saveTx(blockId, txPrice);
    // }

}

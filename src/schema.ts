import "reflect-metadata";
import {buildSchema} from "type-graphql";
import {BlockResolver} from "./resolver";
import {GraphQLSchema} from "graphql";
import {Container} from "typedi";

export const schema: Promise<GraphQLSchema> = buildSchema({
    resolvers: [BlockResolver],
    container: Container,
});

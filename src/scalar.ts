import {GraphQLScalarType, Kind} from "graphql";
import BigNumber from "bignumber";
import {fromIso, toIso} from "./Time";
import {DateTime} from "luxon";

export const BigNumberScalar = new GraphQLScalarType({
    name: "BigNumber",
    description: "bignumber scalar type",
    parseValue(value: string) {
        return new BigNumber(value);
    },
    serialize(value: BigNumber) {
        return value;
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return new BigNumber(ast.value);
        }
        return null;
    },
});

export const DateTimeScalar = new GraphQLScalarType({
    name: "DateTime",
    description: "datetime scalar type",
    parseValue(value: string) {
        return fromIso(value);
    },
    serialize(value: DateTime) {
        return value;
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return toIso(ast.value);
        }
        return null;
    },
});
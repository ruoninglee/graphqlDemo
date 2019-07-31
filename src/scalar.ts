import {GraphQLScalarType, Kind} from "graphql";
import {fromIso, toIso} from "./Time";
import BigNumber from "bignumber.js";
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
        return toIso(value);
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return fromIso(ast.value);
        }
        return null;
    },
});
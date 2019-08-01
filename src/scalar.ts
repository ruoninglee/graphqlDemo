import {GraphQLScalarType, Kind} from "graphql";
import {fromIso, toIso} from "./Time";
import BigNumber from "bignumber.js";
import {DateTime} from "luxon";
import {isNil, isPlainObject} from "lodash";
import {Tag} from "./model";

export const BigNumberScalar = new GraphQLScalarType({
    name: "BigNumber",
    description: "bignumber scalar type",
    parseValue(value) {
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
    parseValue(value) {
        const date = fromIso(value);
        if (isNil(date) || !date.isValid) {
            throw new TypeError(`value cannot convert to DateTime: ${value}`);
        }
        return date;
    },
    serialize(value) {
        return toIso(value);
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            const date = fromIso(ast.value);
            if (isNil(date) || !date.isValid) {
                throw new TypeError(`value cannot convert to DateTime: ${ast.value}`);
            }
            return date;
        }
        return null;
    },
});


export const TagMapScalar = new GraphQLScalarType({
    name: "TagMap",
    description: "tag map scalar type",
    parseValue(value: Tag) {
        if (!(isPlainObject(value))) {
            throw new TypeError(`value cannot convert to object: ${value}`);
        }
        return value;
    },
    serialize(value) {
        return value;
    },
});
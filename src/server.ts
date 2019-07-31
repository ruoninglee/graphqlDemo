import express = require("express");
import graphqlHTTP from "express-graphql";
import {schema} from "./schema";
import {NextFn} from "type-graphql";

const app = express();

schema.then(s => {
    app.use('/graphql',
        <NextFn>graphqlHTTP({
            schema: s,
            graphiql: true,
        }),
    );
})

app.listen(3000);
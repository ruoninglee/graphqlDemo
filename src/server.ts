import express = require("express");
import graphqlHTTP from "express-graphql";
import {schema} from "./schema";

const app = express();

schema.then(s => {
    app.use('/graphql',
        graphqlHTTP({
            schema: s,
            graphiql: true,
        }),
    );
})

app.listen(3000);
import express from 'express';
export const app = express()
app.use(express.json());
app.post("/sum", (req, res) => {

    const a = req.body.a;
    const  b = req.body.b;

    const result = a + b;

    res.json({answer: result});

});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


```
the test file as follows:

import { describe, it} from '@jest/globals';
import {app} from './D-2';
import request from  'supertest';
import axios from 'axios';

describe("test the sum function", () => {
it("should return 3 when 1+2", () => {

//axios.post("http://localhost:3000/sum", {a:1, b:2}).then((res) => {
const res = await request(app).post("/sum").send({a:1, b:2}).then((res) => {

expect(res.body.sum).toBe(3);
expect(res.status).toBe(200);
})

})

//run npm test
```
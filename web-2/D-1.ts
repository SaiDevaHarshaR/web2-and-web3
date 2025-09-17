export function sum(a:number, b:number){
  return a + b;
}


```
we will usejest to test this function

to install jest, run:
npm install --save-dev jest @types/jest ts-jest  @jest/globals

npx ts-jest  config:init

//update the package  in package.json
"scripts": {
  "test": "jest"
}

and add test file as D-1.test.ts  which is as follows:
import { describe, it} from '@jest/globals';
import { sum } from './D-1';

describe('sum' () => {

//test cases
it("should be able to add two positive numbers", () => {
const ans = sum(2,3);
expect(ans,toBe(5));
})

//test cases
it("should be able to add two negative numbers", () => {
const ans = sum(-2,-3);
expect(ans,toBe(-5));
}) 

and so on.....
});

to run the test, use
npm run test
```
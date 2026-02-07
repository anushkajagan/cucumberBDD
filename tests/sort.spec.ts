import {test,Page} from "@playwright/test";

test("to verify sort number in an array",async({page})=>{


let arraynum = [10,8,9,7]
let lengthArraynum = arraynum.length;
let a = "";
let b = "";


for (let i = 0; i<=lengthArraynum-1;i++){

   let  sumofValue = arraynum[i] - arraynum[i+1];
        if (sumofValue > 0)
        {
            a = arraynum[i].toString();
            b = arraynum[i+1].toString();
            console.log("a value is greater than b value");
            arraynum[i] = parseInt(b);
            arraynum[i+1] = parseInt(a);

        }
        else if (sumofValue < 0)
        {
            console.log("a value is less than b value");
            i = i+1;
        }

}


})
import {useMemo} from 'react';

export const useFizzBuzz = () => {
    // jsResult stores the memoized array of computated values from (1 - 100 / [Fizz][Buzz])
    const jsResult = useMemo(()=> {
        console.log("run memo inside");
        let arrayResult = [];
        for (let number = 1; number <=100; number++){
        let result  = "";
        // If number is divisible by 3, result = "Fizz"
        if (number % 3 === 0) result += "Fizz";
        // If number is also divisible by 5, result = "FizzBuzz"
        // If number is only divisible by 5, result = "Buzz"
        if (number % 5 === 0) result += "Buzz";
        if (result === ""){
            // Else, result == <the current number from the iteration>
            result = number;
        }
        // push the result in an array and return it finally
        arrayResult.push(result);
        }
        return arrayResult;
    },[]);

    return jsResult;
}
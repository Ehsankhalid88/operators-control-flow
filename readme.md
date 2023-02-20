# Javascript Operators & Control and flow
Qustion 1: The symbols for each of the below Javascript operators:

Arithmetic Operators:  addition operator +, subtraction - , multiplication * , division  / and remainder of division % .
We also have the exponentiation (**) ,increment (++), decrement (--).

Assignment Operators: equals sign (=),  addition assignment (+=), multiplication assignment (*=), subtraction assignment (-=), division assignment (/=) and modulo assignment (%=).

Comparison Operators: equal to (==), indecate-equal and of th same type-(===), not eqaul to (!=), not indicate (!==), greater than (>), greater than or equal to (>=), less than (<) and less or equal to (<=).

Logical Operators: AND (&&), OR (||)and NOT(!).

Bitwise Operators: Bitwise AND (&), Bitwise OR (|), Bitwise NOT (~), Bitwise XOR(^), Bitwise left shift (<<), Bitwise right shift (>>) and Bitwise Right shift with zero(>>>).

Qustion 2:Examples for each JavaScript Operator:

Arithmetic Operators:
Example 1: let x = 5, y = 10;

let z = x + y; //performs addition and returns 15

z = y - x; //performs subtraction and returns 5

z = x * y; //performs multiplication and returns 50

z = y / x; //performs division and returns 2

z = x % 2; //returns division remainder 1

x++; //post-increment, x will be 5 here and 6 in the next line

++x; //pre-increment, x will be 7 here  

x--; //post-decrement, x will be 7 here and 6 in the next line

--x; //pre-decrement, x will be 5 here

Example2: let x = 100, y = 300;

let sum = x + y; //performs addition and returns 400

minus = y - x; //performs subtraction and returns 200

mult = x * y; //performs multiplication and returns 30.000

div = y / x; //performs division and returns 3

reminder = y % x; //returns division remainder 0.

Assignment Operators:
Example 1: let x = 5, y = 10;

x = y; //x would be 10

x += 1; //x would be 6

x -= 1; //x would be 4

x *= 5; //x would be 25

x /= 5; //x would be 1

x %= 2; //x would be 1.

Example 2: 
let x = 1, y = 30;

x = y; //x would be 1

x += 1; //x would be 2

x -= 1; //x would be 1

x *= 1; //x would be 1

x /= 1; //x would be 1

x %= 2; //x would be 1.

Comparison Operators:
Example 1: let a = 5, b = 10, c = "5" , x = a;


a == c; // returns true

a === c; // returns false

a == x; // returns true

a != b; // returns true

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true.

Example 2:
let a = 15, b = 30, c = "15", x = b;

a == c; // returns true

a === c; // returns false

b == x; // returns true

a != b; // returns true

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true

Logical Operators:
Example 1: let a = 5, b = 10;

(a != b) && (a < b); // returns true

(a > b) || (a == b); // returns false

(a < b) || (a == b); // returns true

!(a < b); // returns false

!(a > b); // returns true.

Example 2: let a = 300, b = 6;

(a != b) && (a < b); // returns fals

(a > b) || (a == b); // returns ture

(a < b) || (a == b); // returns false

!(a < b); // returns true

!(a > b); // returns false.


Bitwise Operators:
Example 1:  let a = 10, b = 20, c = 33;

a == b & b == c //returns false

a == b | b == c //returns false

a == b ^ b == c //returns false

(-a) //returns -10

a << 2 //returns 40

a >> 2 // returns 2

a >>> 2 // returns 2

Example 2 :

 let a = 50, b = 40, c = 30;

a == b & b == c //returns false

a == b | b == c //returns false

a == b ^ b == c //returns false

(-a) //returns -50

a << 2 //returns 200

a >> 2 // returns 12

a >>> 5 // returns 1.

Qustion 4:
 the resulte of the 

 for (let i = 1; i<20 ; i+= 7){
    console.log(i)
}

1 , 8 , 15

In the above example, var i = 1 is an initializer statement where we declare a variable i with value 1. The second part, i < 20 is a condition where it checks whether i is less than 20 or not. The third part, i+=7 is iteration statement where we use addition assigenment operator to increase the value of i to add 7 in the next steep under codetion the result less than 20.
# operators-control-flow

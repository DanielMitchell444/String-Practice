/*Over the past weeks, we have been learning about dom manipulation
variables, if else statements, while loops, and for loops, and functions.
But there is one thing that i forgot to teach you. That is function
paremeters and arguments.
The defintion of a function parameter is one of the variables in the
function. So for example, when you create a function like so
*/

function myName(name1){
console.log(name1);
}

/*Name one is what we like to call a parameter. A parameter is basically
just a placeholder value. 
*/

/*While a argument is the data that you pass into the method parameters
for example, if we wanted to call the myName function, we could
essentially do this while passing a string value inside the
function argument
LIKE SO
*/

myName("Daniel");

/*And this would essentially just console.log Daniel to the console.
The point being, that arguments are when the values that you
pass inside the function when it is called.
*/

/*So for example, lets say we have a function named add that
that has two parameters, a and b, we can make it like so. And
then inside the add function, we can return the value of
a + b. This would look like so
*/

function add(a,b){
 return a + b;
}

/*I haven't talked about return statements yet, but a return statement
essentially stops the execution of the function and returns a value.
Meaning that when we put a return statement inside a function,
it essentially stops the code altogether.
*/

/*And if we call the function like so, what will it return? */

console.log(add(1,2))

/*It'll essentially just return the values of 1 + 2 */


/*PRACTICE */

/*Below this code, i want you to create a function called subtract
that passes two parameters, a and b. Then, i want you to return
the values of a - b 
After you do this, i want you to console.log(),
and then call function inside console.log like above,
passing two arguments of your choosing.
Please type this code below
*/


/*Another thing we learned during our JavaScript course is strings
for a refresher, strings are for storing text and are typically
written with text, like so */

let text = "IPlayPokemonGoEVERYDAYYYY";

/*But now since we finished the course, it is time to dive deeper into
strings, and some of the cool methods you can use with strings. The
first one we will be looking at is the .length property

/* As you can probably guess, the .length property essentially
just checks the length of a given string. This can be seen
like so
*/

console.log(text.length);

/*This can be useful when you are too lazy to check the length
of a string*/

/*Now it is time for you to practice, below, i want you to
create a string variable, and then i want you to console.log
that variable and use .length to determine the length of
the string */


/*Another useful string method is charAt(). charAt()
essentially returns the character at a specific index
in a string. Remember that string indexes, like arrays
start at 0. So if we went */

console.log(text.charAt(0));

/*It would essentially would retrieve the I index of the
string /*

*/

/*You can also get the last character in a string by going like this 
*/

console.log(text.charAt(text.length - 1));

//This is essentially a cooler and more versitle way of getting the last
//index of a string


//.SLICE();

/* Slice is another method that we can use to manipulate strings 
The defintion of slice is that it extracts a part of a string and returns
the extracted part in a new string
An important thing to note is that the end position is not included.
So for example, looking at the text variable, if we went
*/

let part = text.slice(0,4);
console.log(part);

//What parts do you think would be extracted? //

/*Essentially, it would be the first 3 indexs of the string, so it would just be
IPlay */

/*Practice 
Below, i want you to create a variable with the data type string.
Then, i want you to create another variable named part2, and i want you
to slice the newly selected text from index 0 to 4.
*/
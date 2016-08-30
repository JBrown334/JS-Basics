//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name){
    if (name === 'Tyler'){
      return true;
    }
    else {
      return false;
    }
  }
  
  /*G: 
    Good, however you could eliminate the else statement here.
    Because return immediately exits the function, if we evaluate 'name === "tyler"' and 
    it's TRUE then we hit the 'return true'  statement and immediately exit.  If it ISN't true
    then we can simply exit the function by returning false. Else statment is just wasted lines! :)
  */
  
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName(){
    var answer = prompt("What is your name?");
    return answer;
  }

//G: Works perfect. If you wanted to make it a little more efficient you could simply return the prompt like so:
// return prompt("What is your name?");

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome(){
    var name = getName();
    alert('Welcome, ' + name);
  }
//G: Perfecto.

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //parameters are variables of a function, arguments are passed in to be evaluated by the function//

//G: You got the idea. It's kind of a hard thing to articulate. 
//G: A parameter is the variable which is part of the function’s signature (function declaration).
//G: Arguments like you say are what gets passed into the function in place of those parameters when the function is invoked.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?

/*
0
false
NaN
undefined
""
null
*/

//G: Nice, gotta catch'em all! :)


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(){
    return "Joe";
  }
//G: Not so hard eh?


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//G: Nailed it!


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn(){
    return function(){
      return "Joe";
    }
  }

//G: Yes! Exactly right. This is an example of a very simple closure.

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();

//G: Good job man! Javascript is fun amirite? :D

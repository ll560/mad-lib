/*
This is your silly sentence:

I tried to :verb: yesterday with no success... My friend tried to help me by
giving me a :noun: but that only made :anotherVerb:. Luckily we are still friends.

The words you will be asking the user for are above:
1. a verb
2. a noun
3. another verb

*/

// part 1
// link this script file in the HTML file (with the defer attribute)





// part 2
// ask the user for each word and store them in variables:

let verb = prompt('Give me a verb');
let noun = prompt('Give me a noun');
let anotherverb = prompt('Give me another verb');




// part 3
// store the silly sentence in a variable using a template literal, and insert the variables from above:

let sentence = `I tried to ${verb} yesterday with no success... My friend tried to help me by
giving me a ${noun} but that only made ${anotherverb}. Luckily we are still friends.`;



// part 4
// look at the HTML file, find the element that we are going to be storing the sentence in
// store the silly sentence in its innerHTML:
document.getElementById("madLib").innerHTML = sentence;



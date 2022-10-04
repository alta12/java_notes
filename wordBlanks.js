function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) 
{
    var result = "";
    // This is simple way to initialize the var with a simple null null value same as  var zero=0 in some cases 

    result += "The" + " " + myAdjective + " " + myNoun + " " + myVerb + " to me very " + myAdverb;

    return  result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
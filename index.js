function findMatching(array, name){
    let answer = array.filter(function (person) {
        return person.toLowerCase() === name.toLowerCase()
    });
    return answer;
}

function fuzzyMatch(array, string){
    let kindaMatch = array.filter(function(person){
        return person.slice(0, 2) === string
    });
    return kindaMatch
}

function matchName(array, string){
return array.filter(function(driver){
    return driver.name === string
}); 
}
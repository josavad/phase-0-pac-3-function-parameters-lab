function introduction(name) {
    const string = `Hi, my name is ${name}.`;
    return string;
}

function introductionWithLanguage(name = "Josavad", language) {
    const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
return phrase; 
}

function introductionWithLanguageOptional(name = "Josavad", language = "JavaScript") {
 const phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
 return phrase; 
}

console.log(result);
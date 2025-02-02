class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return  string.replace(/[^a-zA-Z0-9 '-]/gmi, "")
    
  }

  static titleize(sentence){
    const splitter = sentence.split(" ")
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    const endSentence = splitter.map((word, index) => index !== 0 && exceptions.includes(word)  ?  word :  Formatter.capitalize(word))
    
    
    return  endSentence.join (" ") 
  }
}

function add(quote, author) {
    quotes.push(quote)
    authors.push(author)
}

var quotes = new Array();
var authors = new Array();

add("Hi", "Me")
add("Hi2", "Me")
add("Hi3", "Me")
add("Hi4", "Me")
add("Hi5", "Me")
add("Hi6", "Me")
add("Hi", "Me")
add("Hi", "Me")

var i = Math.floor(8*Math.random())

document.write('<span style="font-weight: bold; font-size: 300%;">' + quotes[i] + '</span>');
document.write('<span style="font-weight: bold; font-size: 300%;">' + authors[i] + '</span>');
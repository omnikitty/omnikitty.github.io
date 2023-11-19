
function add(quote, author) {
    quotes.push(quote)
    authors.push(author)
}

var quotes = new Array();
var authors = new Array();

add("Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "Albert Schweitzer")
add("All we have to decide is what to do with the time that is given us.", "Gandalf, in Lord of the Rings by J. R. R. Tolkien")
add("Many of the events in any life are accidental or arbitrary, especially the crucial ones, and often we can exercise little conscious control over our destinies. But what’s important is how to behave no matter what life brings; how to wade into the unpredictable stream and deal with whatever happens with grace, courage, and honesty.", "Roger Ebert")
add("Always remember: You’re braver than you believe, stronger than you seem, and smarter than you think.", "Winnie the Pooh")
add("There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", "Albert Einstein")
add("Nothing in this world can take the place of persistence", "Calvin Coolidge")
add("Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... \n Anything can happen, child. Anything can be.", "Shel Silverstein")
add("And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.", "The Little Prince")
add("The secret of getting ahead is getting started.", "Mark Twain")
add("Make improvements, not excuses. ", "Roy Bennett")
add("The way I see it, if you want the rainbow, you gotta put up with the rain.", "Dolly Parton")

var i = Math.floor(quotes.length*Math.random())

document.write('<div class="main">')
document.write('<p class="quote">' + '"' + quotes[i] + '"' + '</p>');
document.write('<p class="author">' + authors[i] + '</p>');
document.write('</div>')
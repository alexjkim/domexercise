//Create a webpage with an h1 of "My Book List".
let books = [
	{
		title: 'The Design of EveryDay Things',
        author: 'Don Norman',
		coverurl: 'https://play-lh.googleusercontent.com/_QRovMnva2jNHn0nryD_MSMAim3SfSeOvVdbUBTUQnn3HS7Wp7jdlFGA37m3j5rY01T3KQZqGCGIIw=s400-rw',
        alreadyRead: false
	}, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
		coverurl: 'https://play-lh.googleusercontent.com/nWZrA2c2YGcZ7Bt6xQ7gLAt0Ccu5d-BkvXRr68OjUoIfCtfUSOoGtTQVWR8ESJwyMzZ4rqGQHlHG=s400-rw',
        alreadyRead: true
	}
];
  
/* 
 Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

Bonuses:
Use a ul and li to display the books.

Add an img to each book that links to a URL of the book cover.

Change the style of the book depending on whether you have read it or not. */

 
//using recommended option to insert external content https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page 

let htmlelement = document.querySelector("#booklist");
const bookelementList = document.createElement("ul");
htmlelement.appendChild(bookelementList);


console.log(htmlelement);

for (const book of books){ 
	console.log(book.title);
	//Create new paragraph DOM element
	const bookelementListItem = document.createElement("li");
	const bookelement = document.createElement("p");
	bookelement.className="book";
	
	//Create book cover image as document element
	
	const bookcover = document.createElement("div");
	const bookcoveranchor = document.createElement("a");
	bookcoveranchor.setAttribute("href",book.coverurl);
	const bookcoverimg = document.createElement("img");
	bookcoverimg.setAttribute("src",book.coverurl);
	bookcoveranchor.appendChild(bookcoverimg);
	bookcoverimg.className="bookcoverimg";
	bookcover.appendChild(bookcoveranchor);
	bookcover.className="bookcover";
	
	
	//Create Title as document element
	const booktitle =  document.createElement("div");
	const booktitleText = document.createTextNode(`${book.title}`);
	booktitle.appendChild(booktitleText);
	booktitle.className="booktitle";
	
	if (book.alreadyRead){
		booktitle.className+=" alreadyread";
		const booktagread =  document.createElement("span");
		const booktagreadText = document.createTextNode(` (already read)`);
		booktagread.appendChild(booktagreadText);
		booktagread.className="booktagread";
		booktitle.appendChild(booktagread);
	
		
	}
	
	//Create Author as document element
	const bookauthor =  document.createElement("div");
	const bookauthorText = document.createTextNode(`by ${book.author}`);
	bookauthor.appendChild(bookauthorText);
	bookauthor.className="bookauthor";
	
	booktitle.appendChild(bookauthor);
	
	
	//Associate the book content to the book element
	bookelement.append(bookcover, booktitle);
	bookelementListItem.appendChild(bookelement);
	
	//Including the new paragraph element into the document
	bookelementList.appendChild(bookelementListItem);
	

}
class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook (bookName, bookAuthor){
        if(this.capacity <= this.books.length){
            throw new Error("Not enough space in the collection.");
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook (bookName) {    
        let book = this.books.find(x => x.bookName === bookName);
        if(!book){
            throw new Error(`${bookName} is not in the collection.`);
        }

        if(book.payed){
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook (bookName){
        let book = this.books.find(x => x.bookName === bookName);
        if(!book){
            throw new Error("The book, you're looking for, is not found.");
        }

        if(!book.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(this.books.indexOf(book), 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics (bookAuthor){
        if(!bookAuthor){
            let result = `The book collection has ${Math.abs(this.capacity - this.books.length)} empty spots left.\n`;

            result += this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).map(x => `${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`).join('\n');

            return result.trimEnd();
        }

        let book = this.books.find(x => x.bookAuthor === bookAuthor);
        if(!book){
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        return `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`;
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
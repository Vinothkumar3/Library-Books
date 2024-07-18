class Book{
    constructor(BookName,AuthorName){
        this.BookName=BookName
        this.AuthorName=AuthorName
        this.read=false
    }

    getBookName(){
        return this.BookName
    }
    getAuthor(){
        return this.AuthorName
    }
    
    Read(){
        return this.read=true
    }

    markRead(){
       return this.read
    }


}
class Library{
    constructor(){
        this.book=[]
    }

    AddBook(BookDetails){
       this.book.push(BookDetails)
      
    }

    getBook(){
        return this.book
    }
//book count
    BookCount(){
        return this.book.length
    }
 //remove book
    DeleteBook(index){
        if(index=>0 && index<=this.book.length){
            this.book.splice(index,1)
        }
    }
}
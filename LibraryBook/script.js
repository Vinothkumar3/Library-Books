const FormEl=document.querySelector("form")

const lib=new Library()

//form submit event

FormEl.addEventListener("submit",(e)=>{
    //prevent input value reload
    e.preventDefault()
   const BookName=document.getElementById("BookName").value.trim()
   const AuthorName=document.getElementById("AuthorName").value.trim()
   
   if(BookName && AuthorName){
    const addBooks=new Book(BookName,AuthorName)
    lib.AddBook(addBooks)
      LibraryRecord()
      document.getElementById("BookName").value=""
      document.getElementById("AuthorName").value=""

   }
   
})

//read book
function MarkAsRead(index){
 lib.getBook()[index].Read()
 LibraryRecord()
}

//remove book
function Delete(index){
lib.DeleteBook(index)
LibraryRecord()
}
function LibraryRecord(){
    
    // added book count 
        const countEl=document.getElementById("count")
        countEl.innerText=`${lib.BookCount()}`
        
    //Library record li
    const LibraryRecord=document.querySelector("#LibraryRecord")
    LibraryRecord.innerHTML=""
    // getbook array value assign libraryrecord using callback
    lib.getBook().forEach((BookVal,index)=>{

        LibraryRecord.innerHTML+=
        `<li class="flex justify-between bg-gray-300 py-2 px-1 my-2">
        <div class="p-1 text-md ${BookVal.markRead()?'line-through':''}" id="bookDetails">${BookVal.getBookName()} by ${BookVal.getAuthor()}</div>
        <div>
            <button class="bg-green-500 text-white p-1 rounded "onclick="MarkAsRead(${index})">Mark As Read</button>
            <button class="bg-red-500 text-white p-1 rounded" onclick="Delete(${index})">Delete</button>
        </div>
       </li>`
    
    
    })

    
  
}


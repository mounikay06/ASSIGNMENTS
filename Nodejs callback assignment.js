
const fetch = require("node-fetch");

ajaxGet('http://localhost:3000/books',(error,books)=>{
    if(error){
        console.log("Error",error.statusCode);
    }else{
        displayBooks(books);
    }
})

async function ajaxGet(url,cb) {
     let data = await fetch(url);
     try{
        let allbooks = await data.json();
         cb(null,allbooks);
     }catch{
         cb(new Error("Error occured"))
     }
    
}



function displayBooks(books) {
        console.log(books);
}

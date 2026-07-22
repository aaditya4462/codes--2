const fs=require("fs");
// let data=fs.readFileSync("Notes.txt");
//         console.log(data.toString());
//     console.log("Gunjan");
 
    //Asynchronous code
 
    fs.readFile("Notes.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data.toString());
        }
    });
    console.log("Gunjan");
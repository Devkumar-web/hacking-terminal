let text=["INITIALIZING DATA ","READING YOUR FILE","PASSWORD FILE DETECTED","SEANDING ALL PASSWORDS AND PERSONAL FILE TO SERVER","CLEANING UP"]

function rd(){
    return new Promise((resolve,reject)=>{
        random=Math.floor(1+Math.random()*6);
        setTimeout(()=>{
            resolve();
        },random*1000);
    });
};


const getdata=async (item)=>{
await rd();
let div=document.createElement("div");
div.innerHTML=item;
document.body.append(div);
}



async function main(){
  let t=setInterval(()=>{
    let last=document.body.lastElementChild;
    if(last.innerHTML.endsWith("...")){
        last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3);
    }
    else{
    last.innerHTML=last.innerHTML+".";}
    },70)



for(const item of text){
    await getdata(item);
}

await rd();
clearInterval(t);
}

 main();
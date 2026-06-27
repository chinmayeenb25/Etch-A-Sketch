console.log("Script loaded");
const container=document.querySelector('.container');
for (let i=0;i<16;i++){
    const row=document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    
    for(let i=0;i<16;i++){
        const box=document.createElement("div");
        box.classList.add("box");
        row.append(box);
        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor = "black";

        });
    }
}


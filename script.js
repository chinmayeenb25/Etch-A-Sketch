console.log("Script loaded");
const size=document.querySelector('.grid-size');
size.addEventListener("click",()=>{
    let boxsize=prompt("enter the grid size");
    boxside=Number(boxsize);
    if (boxside<100){
        createGrid(boxside);
    }
    else{
        alert("The gride size should be less than 100");
    }
})
function createGrid(x){
    const container=document.querySelector('.container');
    for (let i=0;i<x;i++){
        const row=document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        
        for(let i=0;i<x;i++){
            const box=document.createElement("div");
            box.classList.add("box");
            box.style.width = `${960 / x}px`;
            box.style.height = `${960 / x}px`;
            row.append(box);
            box.addEventListener("mouseover",()=>{
                box.style.backgroundColor = "black";

            });
        }
    }
}



let signs = [];
let line = "";

export const btnClick = e =>{
    console.log(e.target.innerHTML);
    signs.push(e.target.innerHTML);
}
export const btnEqualClick = e =>{
    line="";
    for (let x of signs){
        line+=x;
    }
    console.log(eval(line))
}
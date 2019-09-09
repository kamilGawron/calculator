import store from '../store'
import {addNewNum,addNewSign,clearSigns,clearLast} from '../actions/signs'

let res = document.querySelectorAll("#display #calcResult div:nth-of-type(2)")[0];
let operation = document.querySelectorAll("#display #calcResult div:nth-of-type(1)")[0];

export const btnEqualClick = e =>{
    if(store.getState().signs.signs[0]){
        res = document.querySelectorAll("#display #calcResult div:nth-of-type(2)")[0];
        operation = document.querySelectorAll("#display #calcResult div:nth-of-type(1)")[0];
        res.className = res.className=="result-before"? "result-after":"";
        operation.style.display = "none"; 
    }
   
}
export const numberClick = (e) =>{
        if(res){
            if(res.className=="result-after"){
                store.dispatch(clearSigns());
                res.className="result-before";
                operation.style.display= "block";
            } 
        }
        store.dispatch(addNewNum(e))
    }
import {ADD_NUM,ADD_SIGN,CLEAR_SIGNS,CLEAR_LAST,SET_RES,ADD_OPEN_BRACKET,ADD_CLOSE_BRACKET} from '../actions/types'
import {setResult} from '../actions/signs'

let line ="";
let closingLine ="";
let resultLine ="";
let result ="";

let openingBracketCounter = 0;
let closingBracketCounter = 0;

let initialState ={
    signs:[],
    result:0
}

const getResult = (signsTab) =>{
    
    line ="";
    closingLine ="";
    openingBracketCounter=0;
    closingBracketCounter=0;
    for (let x in signsTab){
        line+=signsTab[x];
    if(signsTab[x]=="(") openingBracketCounter++;
    if(signsTab[x]==")") closingBracketCounter++;
    }
    for (let i=0;i<(openingBracketCounter-closingBracketCounter);i++){
        closingLine +=")";
    }
    resultLine = line+closingLine;
    try{
        result = eval(resultLine);
    }
    catch(err){
        result ="error,try again"
    }
    return result;
}

const removeLast=tab=>{
    let resultTab = [];
    let tmpResultTab = [];
    for(let i =0;i<tab.length-1;i++){
        resultTab[i]=tab[i];
    }
    return resultTab;
}
const lastSignIsNum = tab=>{
    let tmpTab =[];
    for(let i=0;i<tab.length;i++){
        tmpTab[i]=tab[i];
    }
    let lastSign = tmpTab.pop();
    if(lastSign=="("){
        openingBracketCounter--;
    }
    if(lastSign==")"){
        closingBracketCounter--;
    }
    return (!isNaN(parseInt(lastSign)));
}
const penultimateSignIsNum = tab=>{
    let tmpTab =[];
    for(let i=0;i<tab.length-1;i++){
        tmpTab[i]=tab[i];
    }
    let penultimateSign = tmpTab.pop();
    if(penultimateSign=="("){
        openingBracketCounter--;
    }
    if(penultimateSign==")"){
        closingBracketCounter--;
    }
    return (!isNaN(parseInt(penultimateSign)));
}
const removeSigns = tab =>{
    let tmpTab = [];
    for (let i=0;i<tab.length-1;i++){
        tmpTab[i]=tab[i]
    }
    while(true){
        if((isNaN(tmpTab[tmpTab.length-1]))&&(tmpTab.length>0)&&(tmpTab[tmpTab.length-1]!=")")){
            tmpTab.pop();
        }
        else{
            break;
        }
    }
    return tmpTab;
}
const onClearLast = state =>{
    if(penultimateSignIsNum(state.signs)){
        return {
            result:getResult(removeLast(state.signs)),
            signs:removeLast(state.signs)
        };
    }
    else{
        return {
            signs:removeSigns(state.signs),
            result:getResult(removeSigns(state.signs))

        };
    }
    
}
const checkLastSign = signs =>{
    return signs[signs.length-1];
}
const checkSign=(signs,sign)=>{
    if((sign==")")&&(openingBracketCounter<=closingBracketCounter)){
        openingBracketCounter++;
        if(lastSignIsNum(signs)){
            return ["*","("];
        }else{
            return ["("];
        }
    } 
    if((sign=="(")&&((lastSignIsNum(signs))||(checkLastSign(signs)==")"))){
        openingBracketCounter++;
        return ["*","("];
    }
    if((isNaN(sign))&&((!lastSignIsNum(signs))&&(sign!=")")&&(sign!="("))){
        console.log("in");
        return [sign];
    }
    if(sign=="(") openingBracketCounter++;
    if(sign==")") closingBracketCounter++;
    return [sign];
}


export const signs = (state=initialState,action)=>{
    switch(action.type){
        case ADD_NUM:
            return {
                result:getResult([...state.signs,action.sign]),
                signs:[...state.signs,action.sign]
            }
        case ADD_SIGN:
            return {
                ...state,
                signs:[...state.signs,...checkSign(state.signs,action.sign)]
            }
        case CLEAR_SIGNS:
            return initialState;
        case CLEAR_LAST:
            return onClearLast(state);
        default:
            return state;
    }
}
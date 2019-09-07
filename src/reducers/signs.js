import {ADD_NUM,ADD_SIGN,CLEAR_SIGNS,CLEAR_LAST,SET_RES} from '../actions/types'
import {setResult} from '../actions/signs'

let initialState ={
    signs:[],
    result:0
}

const getResult = (signsTab) =>{
    let line ="";
    for (let x in signsTab){
        line+=signsTab[x];
    }
    return eval(line)
}

const removeLast=tab=>{
    let resultTab = [];
    for(let i =0;i<tab.length-1;i++){
        resultTab[i]=tab[i];
    }
    
    return resultTab;
}
const lastSignIsNum = tab=>{
    let tmpTab =[];
    for(let i=0;i<tab.length-1;i++){
        tmpTab[i]=tab[i];
    }
    console.log("tmptab",tmpTab)
    let lastSign = tmpTab.pop();
    return (!isNaN(parseInt(lastSign)));
}
const removeTwoSigns = tab =>{
    let tmpTab = [];
    for (let x in tab){
        tmpTab[x]=tab[x]
    }
    tmpTab = removeLast(tmpTab);
    tmpTab = removeLast(tmpTab);
    return tmpTab;
}
const onClearLast = state =>{
    if(lastSignIsNum(state.signs)){
        console.log(state.signs)
        return {
            result:getResult(removeLast(state.signs)),
            signs:removeLast(state.signs)
        };
    }
    else{
        return {
            signs:removeTwoSigns(state.signs),
            result:getResult(removeTwoSigns(state.signs))

        };
    }
    
}
export const signs = (state=initialState,action)=>{
    switch(action.type){
        case ADD_NUM:
            return {
                ...state.signs,
                result:getResult([...state.signs,action.sign]),
                signs:[...state.signs,action.sign]
            }
        case ADD_SIGN:
            return {
                ...state,
                signs:[...state.signs,action.sign]
            }
        case CLEAR_SIGNS:
            return initialState;
        case CLEAR_LAST:
            return onClearLast(state);
        default:
            return state;
    }
}
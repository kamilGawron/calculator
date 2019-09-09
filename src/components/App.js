import React from 'react';
import {btnEqualClick,numberClick} from '../services/btnClick'
import {setResultAccuracy} from '../services/resultAccuracy'
import {connect} from 'react-redux'
import {addNewNum,addNewSign,clearSigns,clearLast} from '../actions/signs'


class App extends React.Component{
    
    render(){
         return (
      <React.Fragment>
       <div id="display">
            {this.props.signs[0]?
               <div id="calcResult">
                   <div className="operation">{this.props.signs}</div>
                   <div className="result-before">{setResultAccuracy(this.props.result)}</div>
               </div>
               :
                <div id="desc">Type numbers</div>
           }
            
      </div>
      <div id="buttons">
          <div>
            <button onClick={this.props.onClearSigns}>C</button> 
            <button onClick={this.props.onClearLast}>del</button> 
            <button onClick={this.props.onAddNewSign}>/</button> 
            <button onClick={this.props.onAddNewSign}>*</button> 
          </div>
          <div>
            <button onClick={numberClick}>7</button> 
            <button onClick={numberClick}>8</button> 
            <button onClick={numberClick}>9</button> 
            <button onClick={this.props.onAddNewSign}>-</button> 
          </div>
          <div>
            <button onClick={numberClick}>4</button> 
            <button onClick={numberClick}>5</button> 
            <button onClick={numberClick}>6</button> 
            <button onClick={this.props.onAddNewSign}>+</button> 
          </div>
          <div>
            <button onClick={numberClick}>1</button> 
            <button onClick={numberClick}>2</button> 
            <button onClick={numberClick}>3</button> 
            <button onClick={this.props.onAddNewSign}>(</button> 
          </div>
          <div>
            <button onClick={this.props.onAddNewSign}>.</button> 
            <button onClick={numberClick}>0</button> 
             <button onClick={this.props.onAddNewSign}>)</button> 
            <button onClick={btnEqualClick}>=</button> 
          </div>
      </div>
      </React.Fragment>
    );
    }
 
}

const mapStateToProps = state =>({
    signs:state.signs.signs,
    result:state.signs.result
})
const mapDispatchToProps = ({
    onAddNewNum:addNewNum,
    onAddNewSign:addNewSign,
    onClearSigns : clearSigns,
    onClearLast:clearLast
})

export default connect (mapStateToProps,mapDispatchToProps)(App);
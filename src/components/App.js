import React from 'react';
import {btnClick,btnEqualClick} from '../services/btnClick'
import {connect} from 'react-redux'
import {addNewNum,addNewSign,clearSigns,clearLast} from '../actions/signs'

class App extends React.Component{

    render(){
         return (
      <React.Fragment>
       <div id="display">
             {this.props.signs[0]? <div>{this.props.signs} = {this.props.result}</div>:<div>Type numbers</div>}
          
      </div>
      <div id="buttons">
          <div>
            <button onClick={this.props.onClearSigns}>C</button> 
            <button onClick={this.props.onClearLast }>del</button> 
            <button onClick={this.props.onAddNewSign}>()</button> 
            <button onClick={this.props.onAddNewSign}>/</button> 
          </div>
          <div>
            <button onClick={this.props.onAddNewNum}>7</button> 
            <button onClick={this.props.onAddNewNum}>8</button> 
            <button onClick={this.props.onAddNewNum}>9</button> 
            <button onClick={this.props.onAddNewSign}>*</button> 
          </div>
          <div>
            <button onClick={this.props.onAddNewNum}>4</button> 
            <button onClick={this.props.onAddNewNum}>5</button> 
            <button onClick={this.props.onAddNewNum}>6</button> 
            <button onClick={this.props.onAddNewSign}>-</button> 
          </div>
          <div>
            <button onClick={this.props.onAddNewNum}>1</button> 
            <button onClick={this.props.onAddNewNum}>2</button> 
            <button onClick={this.props.onAddNewNum}>3</button> 
            <button onClick={this.props.onAddNewSign}>+</button> 
          </div>
          <div>
            <button onClick={this.props.onAddNewSign}>%</button> 
            <button onClick={this.props.onAddNewNum}>0</button> 
            <button onClick={this.props.onAddNewSign}>.</button> 
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
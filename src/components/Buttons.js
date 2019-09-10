import React from 'react'
import {connect} from 'react-redux'
import {setResultAccuracy} from '../services/resultAccuracy'
import {addNewNum,addNewSign,clearSigns,clearLast} from '../actions/signs'
import {btnEqualClick,numberClick} from '../services/btnClick'

class Buttons extends React.Component{
    render(){
        return(
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
        )
    }
}
const mapStateToProps = state =>({})
const mapDispatchToProps = ({
    onAddNewNum:addNewNum,
    onAddNewSign:addNewSign,
    onClearSigns : clearSigns,
    onClearLast:clearLast
})

export default connect (mapStateToProps,mapDispatchToProps)(Buttons);
import React from 'react'
import {connect} from 'react-redux'
import CalcResult from './CalcResult'
import CalcDescription from './CalcDescription'

class Display extends React.Component{
    render(){
        return(
            <div id="display">
                {this.props.signs[0]?
                    <CalcResult />
                :
                    <CalcDescription />
               }
          </div>
        )
    }
}

const mapStateToProps = state =>({
    signs:state.signs.signs,
})

export default connect (mapStateToProps)(Display);
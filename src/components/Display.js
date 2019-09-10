import React from 'react'
import {connect} from 'react-redux'
import {setResultAccuracy} from '../services/resultAccuracy'

class Display extends React.Component{
    render(){
        return(
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
        )
    }
}

const mapStateToProps = state =>({
    signs:state.signs.signs,
    result:state.signs.result
})

export default connect (mapStateToProps)(Display);
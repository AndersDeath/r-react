import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CustomSelect from '../components/CustomSelect'
import CountryList from '../components/CountryList'
import { addCountryItem } from '../actions'
import { COUNTRIES } from '../constants'

class TestComponent extends React.Component {
  constructor(props){
    super(props)
    this.componentId = +new Date();
  }
  render() {
    return(
      <div className="TestComponent">
        <CustomSelect data={COUNTRIES} componentId={this.componentId}/>
        <CountryList data={COUNTRIES} componentId={this.componentId}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    store: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCountryItemAction: bindActionCreators(addCountryItem, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)


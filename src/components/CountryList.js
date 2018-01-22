import React from 'react'
import { connect } from 'react-redux'

class CountryList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let filteredData = this.props.store.testReducer.filter((item)=>{
      return item.componentId === this.props.componentId
    })
    let activeCountryId = -1,
    lastCountry = filteredData[filteredData.length-1];
    if(lastCountry !== undefined) {
      activeCountryId = lastCountry.countryId;
    }
    return  <div className="CountryList">
                 {
                    this.props.data.map(item=>{
                      let active = activeCountryId === item.id ? 'active' : '';
                        return <span key={item.id} className={active}>{item.country} - {item.capital}</span>
                    })
                  }
                  <hr />
                  Всего было выбрано: {filteredData.length}
            </div>
  }
}

function mapStateToProps(state) {
    return {
      store: state
    }
  }

CountryList = connect(mapStateToProps)(CountryList)

export default CountryList

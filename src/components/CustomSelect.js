import React from 'react'
import { connect } from 'react-redux'
import { addCountryItem } from '../actions'

class CustomSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [], visible: false }
    this.state.data = this.props.data;
    this.inputValue = '';
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.change = this.change.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  open() {
    this.setState({
      data: this.props.data, visible: true
    });
    document.addEventListener('click',this.close,false)
  }
  close(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({
      data: this.props.data, visible: false
    });
    document.removeEventListener('click', this.close, false);
  }
  change(e) {
    let targetValue = e.target.value.toLowerCase(),
    data
    if (targetValue.trim().length > 0) {
      data = this.props.data.filter((item) => {
        return (item.country.toLowerCase().search(targetValue) !== -1 || item.capital.toLowerCase().search(targetValue) !== -1);
      });
    } else {
      data = this.props.data;
    }
  
    this.inputValue = e.target.value;
    this.setState({
      data: data, visible: true
    })
  }
  addItem(num){
    this.props.dispatch(addCountryItem({countryId:num,componentId: this.props.componentId}))
    this.inputValue = `${this.props.data[num].country } - ${this.props.data[num].capital}`;
    this.setState({
      data: this.props.data, visible: false
    });
  }
  render() {
    let style = {
      display: this.state.visible ? 'block' : 'none'
    }
    return  <div className="CustomSelect" ref={node=>{this.node = node}}>
              <input onChange={this.change} onFocus={this.open} value={this.inputValue}/>
              <div className="CustomSelect__container" style={style} >
                  {
                      this.state.data.map(item=>{
                          return <span key={item.id} onClick={this.addItem.bind(this,item.id)}>{item.country} - {item.capital}</span>
                      })
                  }
              </div>
            </div>
  }
}
CustomSelect = connect()(CustomSelect)

export default CustomSelect

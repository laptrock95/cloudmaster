import React, { Component } from 'react'

export default class TabContent extends Component {
  render() {
    return (
      <div className={"tab-pane fade "+this.props.active} id={'tabContent-'+this.props.tabIndex} 
      role="tabpanel" aria-labelledby="v-pills-home-tab">
        <p>{this.props.children}</p>
      </div>
    )
  }
}


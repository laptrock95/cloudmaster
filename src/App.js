import React, { Component } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import TabName from './TabName.js'
import TabContent from './TabContent';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected:this.props.tabIndexActive
    }
  }

  tabsUpdate = (tabSelected) => {
    this.setState({
      selected:tabSelected.props.tabIndex
    })
  }

  render() {  
    return (
      <div className="container mt-3 ml-2">
        <div className="row">
          <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" 
                role="tablist" aria-orientation="vertical">
                {
                  this.props.tabs.map((tab, index) => 
                  <TabName key={index} tabIndex={index} icon={tab.icono}
                  active={this.state.selected==index ? ' active':''}
                  tabsUpdate={this.tabsUpdate}>{tab.nombre}</TabName>
                  )
                }
            </div>
          </div>
          <div className="col-9 border">
          <div className="tab-content" id="v-pills-tabContent">
            {
              this.props.tabs.map((tab,index) => 
                <TabContent active={this.state.selected==index ? ' show active':''} key={index}
                tabIndex={index}>
                {tab.contenido}
                </TabContent>
             )}
          </div>
          </div>
        </div>
      </div>
    )
  }
}


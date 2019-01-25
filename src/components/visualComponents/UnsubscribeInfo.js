import React from 'react';
import {Spring, config} from 'react-spring'

export default class Unsubscribe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      didMount: false
    }
  }

  componentDidMount() {
     setTimeout(() => {
       this.setState({
         didMount: true
       })
     }, 4000);
  }

  largeSix = {
    fontFamily: "Aleo",
    fontSize: "3.7em",
  }

 render() {
  return <div className="unsubInfoPage">
    {this.state.didMount ? <div style={this.largeSix}>365</div> : <Spring config={config.molasses} from={{ number: 0 }} to={{ number: 365 }}>
          {props => <div style={this.largeSix}>{props.number.toFixed()}</div>}
        </Spring>}
      <span />
      <br />
      <h5>
        Today's sea level is rising at a rate greater than ever recorded in
        history. We're experiencing the impacts of sea level rise today, with
        every extreme high tide, heavy precipitation event, and coastal storm.
      </h5>
      <a id="GISLinkTwo" href="https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml" target="_blank" rel="noopener noreferrer">
        Explore Maine GIS SLR Maps
      </a>
      <br />
      <br />
    </div>;
 }
  

}


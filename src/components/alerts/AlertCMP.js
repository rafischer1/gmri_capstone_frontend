import React from 'react';
import { Modal, Button} from 'react-materialize';

export default class AlertCMP extends React.Component {

  warningModalCss = {
    marginLeft: "12.5%",
    marginTop: "2%",
  }
  
  buttonStyle = {
    cursor: "pointer",
    width: "80%",
  }
  
 render() {
   return !this.props.props ? <div /> : <div className="alertDiv" style={this.warningModalCss}>
       <Modal header="Portland Harbor Flood Warning" trigger={
          <Button style={this.buttonStyle} className="red darken-2">
            <strong>Alert</strong>: Flooding Predicted Portland
          </Button>}>
         <h3>
           Moderate to Major flooding predicted for Portland Harbor around 10pm with a tide of 11.87ft. Winds 30-35mph and steady rain through the afternoon.
           {/* {this.props.props.toFixed(1)} Ft */}
         </h3>
       <h5>Expect major flooding in the Old Port and Bayside neighborhoods with increased flooding expected for tomorrow at 10am.</h5>
         <br />
         <hr />
         <a href="https://twitter.com/CityPortland" rel="noopener noreferrer" target="_blank">
           <img alt="twitter logo" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" height="75" /> See Portland Maine Twitter for important Alert Information
         </a>
       </Modal>
     </div>;
  }
};
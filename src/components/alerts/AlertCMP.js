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
       <Modal header="Portland Harbor Flood Warning" trigger={<Button style={this.buttonStyle} className="red darken-2">
             <span aria-label="alert" role="img">
               🚨
             </span>Alert: Flooding Predicted Portland <span aria-label="alert" role="img">
               🚨
             </span>
           </Button>}>
         <h3>
           Flooding is predicted today with a Water Level of:{" "}
           {this.props.props.toFixed(1)} Ft
         </h3>
         <br />
         <hr />
         <a href="https://twitter.com/CityPortland" rel="noopener noreferrer" target="_blank">
           <img alt="twitter logo" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" height="75" /> See Portland Maine Twitter for important Alert Information
         </a>
       </Modal>
     </div>;
  }
};



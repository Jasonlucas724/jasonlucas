/**
*
* Footer
*
*/
import React from 'react';

class Footer extends React.PureComponent {


  render() {
    const footer={
      weight:"30px",
      height:"15px",
      justifycontent:"center"
    }
    const copyrightStyle={
      weight:"30px",
      justifyContent:"center",
      alignSelf:"center",
      textAlign:"center"

    }
    return (
      <div>
        <footer style={footer}>
         <div>
           <p style={copyrightStyle}>Copyright &copy; Jason Lucas digiworks | 706-910-9906</p>
         </div>

        </footer>

      </div>
    );
  }
}

export default Footer;

/**
*
* Footer
*
*/
import React from 'react';

class Footer extends React.PureComponent {


  render() {
    const footerStyle={
      weight:"30px",
      height:"15px"
    }
    const copyrightStyle={
      weight:"30px",
      height:"15px"

    }
    return (
      <div>
        <footer style={footerStyle}>
         <div>
           <p style={copyrightStyle}>Copyright &copy; Jason Lucas digiworks | 706-910-9906</p>
         </div>

        </footer>

      </div>
    );
  }
}

export default Footer;

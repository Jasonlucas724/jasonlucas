/**
*
* Header
*
*/

import React from 'react';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';


class Header extends React.PureComponent {
  render() {
    const columnTwo={
      width:"70%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      height:"200px"
    }
    const searchBar={
      alignSelf:"flex-end"

    }
    const linkStyle={
      textDecoration:"none",
      textAlign: "80px",
      color:"#ffffff"

    }
    const navStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      color:"#777777"

    }


    const logoStyle={
      width: "100px",
      height:"100px",
      alignSelf:"center"

    }


    const columnOne={
      width:"20%"

    }

    const divstyle={
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      background:"url(https://s-media-cache-ak0.pinimg.com/originals/f7/75/f9/f775f904a08729a8229425ee98323f49.jpg)",
      backgroundSize: "cover",
      height: "200px",
      alignItems:"center",
      backgroundRepeat:"no-repeat",
      width:"100%",
      backgroundPosition:"center center"

    }

    return (
      <div>
         <header style={divstyle}>
           <div style={columnOne}>
            <img style={logoStyle} src="http://logos-download.com/wp-content/uploads/2017/01/Perdido_Beach_Resort_logo.png"/>
           </div>
           <div style={columnTwo}>
             <TextField hintText="search" style={searchBar}/>
             <div style={navStyle}>
               <Link to="/" style={linkStyle}>Home</Link>
               <Link to="/about" style={linkStyle}>About</Link>
               <Link to="/gallery" style={linkStyle}>Gallery</Link>
               <Link to="/contact" style={linkStyle}>Contact</Link>
             </div>
           </div>
         </header>

      </div>

    );
  }
}

export default Header;

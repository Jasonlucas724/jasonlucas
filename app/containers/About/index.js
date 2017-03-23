/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
export default class About extends React.PureComponent {
  render() {
    const linkStyle={
      textDecoration:"none",
      textAlign: "80px",
      color:"#ffffff"

    }
    const divstyle={
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      background:"#ffffff",
      backgroundSize: "cover",
      height: "200px",
      alignItems:"center",
      backgroundRepeat:"no-repeat",
      width:"100%",
      backgroundPosition:"center center"

    }
    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
         <header style={divstyle}>
           <div style={columnOne}>
             <img style={logoStyle} src="#"/>
           </div>
           <div style={columnTwo}>
             <TextField hintText="search" style={searchBar}/>
           </div>
             <Link to="/">Home</Link>
               <Link to="/about">About</Link>
                 <Link to="/gallery">Gallery</Link>
        </header>


        <main>
        </main>


        <footer>
        </footer>



      </div>
    );
  }
}

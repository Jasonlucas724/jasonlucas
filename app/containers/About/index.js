/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import Header from "components/Header";


export default class About extends React.PureComponent {
  render() {

    const navbarStyle={
      weight:"200px",
      height:"200px",
      color:"#02C2E8",



    }
    const main={
    weight:"200px",
    height:"200px",
    color:"#000000",
    fontFamily:"roboto"

    }
    const imgContainer={
    weight:"200px",
    height:"200px",
    color:"#000000",
    fontFamily:"roboto"

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
    const columnOne={
      weight:"200px",
      height:"200px",
      color:"#000000",

      fontFamily:"railway"
    }
    const linkStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      color:"#777777"


    }
    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
         <Header/>
         <p> Check out our Summer deals.</p>

         <main>
          <div style={main}>
            <h1>Please enjoy us for family fun.</h1>
          <h1 style={imgContainer}></h1>
          </div>
        </main>

      <footer>
        <ul>
          <li>Enjoy the ocean</li>
          <li>Shoping</li>
          <li>Fishing</li>
          <li>Water Park</li>
        </ul>
        <address>
         Infinite Loop,<br/>
         Cupertino, CA<br/>
         95014, USA
       </address>
      </footer>
    </div>


    );
  }
}

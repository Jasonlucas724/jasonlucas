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
    weight:"100px",
    height:"100px",
    color:"#000000",
    fontFamily:"Roboto"

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
    const listStyle={
      listStyletype:"decimal"
    }
    const address={
      marginTop:"28vh",
      display:"flex",
      flexDirection:"column",
      /*bottom: "auto"*/
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

            <ul style={listStyle}>
              <li>Enjoy the ocean</li>
              <li>Shoping</li>
              <li>Fishing</li>
              <li>Water Park</li>
            </ul>
          </div>
        </main>

      <footer>
        <address style={address}>
         <div>Infinite Loop,</div>
         <div>Cupertino, CA</div>
         <div>95014, USA</div>
       </address>
      </footer>
    </div>


    );
  }
}

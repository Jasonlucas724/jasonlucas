/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RefreshIndicator from 'material-ui/RefreshIndicator';
export default class Home extends React.PureComponent {
  render() {
    const linkStyle={
      textDecoration:"none",
      textAlign: "80px",
      bottom: "40px",
      color:"#ffffff"

    }
    const navStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",

    }
    const logoStyle={
      width: "100px",
      height:"100px",
      alignSelf:"center"

    }
    const h2={
      width: "50px",
      height:"50px",
      color:"#ffffff",
      fontFamily:"railway",
      flexWrap: "nowrap"

    }
    const divstyle={
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      background: "url(http://www.oceanmayaroyale.com/images/gallery/gallery-3.jpg)",
      backgroundSize: "cover",
      height: "200px",
      alignItems:"center",
      backgroundRepeat:"no-repeat",
      width:"100%",
      backgroundPosition:"center center"

    }
    const main={
      width: "100%",
      height:"100vh",
      background: "url(https://assets.rbl.ms/2326929/980x.jpg)",
      backgroundSize:"cover",
      display:"flex",
      flexDirection: "row",
      justifyContent:"center",
      flexWrap:"wrap",
      paddingTop:"50px"
    }
    const imgContainer={
      display:"flex",
      flexDirection:"column",
      width:"50%",


    }
    const first={
      width: "200px",
      height:"200px",
      alignSelf:"center",
      textAlign: "center",
      borderRadius:"20px 50%",

    }
    const paragraphStyle={
      display:"flex",
      textAlign: "center",
      justifyContent:"center",
      width:"200px",
      margin:"0 auto",
      color:"#fffff"


    }
    const second={
      width: "200px",
      height:"200px",
      alignSelf:"center",
      borderRadius:"20px 50%"
    }
    const third={
      width: "200px",
      height:"200px",
      alignSelf:"center",
      borderRadius:"20px 50%"
    }
    const fourth={
      width: "200px",
      height:"200px",
      alignSelf:"center",
      borderRadius:"20px 50%"
    }
    const heading={
      width: "100%",
      height:"50px",
      alignSelf:"center",
      textAlign: "center",
      color:"#ffffff",
      fontFamily:"railway"

    }


    const wrapper={
      width:"200px",
      height:"200px",
      background:"#ff0000"

    }
    const flex={
      width:"200px",
      height:"200px",
      background:"#ff0000"

    }
    const footerStyle={
      backgroundColor:"#ffffff",
      height:"70px",
      display:"flex"

    }
    const copyrightStyle={
     textAlign: "center",
     marginLeft: "800px"

    }
    const columnOne={
      width:"20%"

    }
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
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
         <header style={divstyle}>
           <div style={columnOne}>
            <img style={logoStyle} src="http://www.avistaresort.com/images/layout/logo.png"/>
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


         <main>
          <div style={main}>

          <div style={imgContainer}>
            <img style={first} src="https://i1.wp.com/travelmamas.com/wp-content/uploads/2016/08/Double-Helix-Waterslides-square.jpg?resize=400%2C400&ssl=1"/>
            <div>
              <h1 style={heading}>Activities</h1>
              <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div style={imgContainer}>
            <img style={second} src="http://www.royalsunset.biz/uploads/1/3/2/0/13204792/2438029.jpg"/>
              <div>
               <h1 style={heading}>Ocean</h1>
               <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

              </div>
          </div>

          <div style={imgContainer}>
            <img style={third} src="https://wa4.jetcdn.com/photos/scrub-island-resort-spa-marina-autograph-collection/1fH4WzFr/lagoon-resort-sea-bay.jpeg?x=1402&y=1071&w=400&h=400&dpr=1"/>
              <div>
                <h1 style={heading}>Resorts</h1>
                <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

              </div>

          </div>
          <div style={imgContainer}>
          <img style={fourth} src="https://wa5.jetcdn.com/v4/static/images/product/properties/ean/8965/src-1048261_113_z.jpg?w=400&h=400&dpr=1"/>
            <div>
              <h1 style={heading}>Contact</h1>
              <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            </div>
          </div>




          </div>

         </main>


         <footer style={footerStyle}>
          <div>
            <p style={copyrightStyle}>Copyright &copy; Jason Lucas digiworks | 706-910-9906</p>
            </div>

         </footer>

      </div>
    );
  }
}

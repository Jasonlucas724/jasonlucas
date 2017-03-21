/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
export default class Home extends React.PureComponent {
  render() {
    const linkStyle={
      textDecoration:"none",
      textAlign: "80px",
      bottom: "40px",
      color:"#000000"

    }
    const logoStyle={
      width: "100px",
      height:"100px",
      alignSelf:"center"

    }
    const divstyle={
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      background: "url(http://cdn-image.travelandleisure.com/sites/default/files/styles/tnl_redesign_article_landing_page/public/201402-w-best-mexico-beach-resorts-pueblo-bonito-sunset-beach-resort.jpg?itok=BmsaTFkl)",
      backgroundSize: "cover",
      height: "200px",
      alignItems:"flex-end",
      backgroundRepeat:"no-repeat",
      width:"100%"
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
      width:"50%"


    }
    const first={
      width: "200px",
      height:"200px",
      alignSelf:"center",
      textAlign: "center"

    }
    const second={
      width: "200px",
      height:"200px",
      alignSelf:"center"

    }
    const third={
      width: "200px",
      height:"200px",
      alignSelf:"center"

    }
    const fourth={
      width: "200px",
      height:"200px",
      alignSelf:"center"

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
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
         <header>

           <div style={divstyle}>
              <img style={logoStyle} src="https://logopond.com/avatar/1862/logoholik-icon-logopond2.png"/>

              <Link to="/" style={linkStyle}>Home</Link>
              <Link to="/about" style={linkStyle}>About</Link>
              <Link to="/gallery" style={linkStyle}>Gallery</Link>
              <Link to="/contact" style={linkStyle}>Contact</Link>
          </div>

         </header>


         <main>
          <div style={main}>

          <div style={imgContainer}>
            <img style={first} src="https://i1.wp.com/travelmamas.com/wp-content/uploads/2016/08/Double-Helix-Waterslides-square.jpg?resize=400%2C400&ssl=1"/>
            <div>
              <h1>Activities</h1>
            </div>
          </div>
          <div style={imgContainer}>
            <img style={second} src="http://www.royalsunset.biz/uploads/1/3/2/0/13204792/2438029.jpg"/>
              <div></div>
          </div>
          <div style={imgContainer}>
            <img style={third} src="https://wa4.jetcdn.com/photos/scrub-island-resort-spa-marina-autograph-collection/1fH4WzFr/lagoon-resort-sea-bay.jpeg?x=1402&y=1071&w=400&h=400&dpr=1"/>
              <div></div>
          </div>
          <div style={imgContainer}>
          <img style={fourth} src="https://wa5.jetcdn.com/v4/static/images/product/properties/ean/8965/src-1048261_113_z.jpg?w=400&h=400&dpr=1"/>
            <div></div>
          </div>




          </div>

         </main>


         <footer>

         </footer>

      </div>
    );
  }
}

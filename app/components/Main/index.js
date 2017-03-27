/**
*
* Main
*
*/

import React from 'react';
import Responsive from 'react-responsive';

class Main extends React.PureComponent {
  render() {
    const main={
      width: "100%",
      height:"100vh",
      backgroundSize:"cover",
      display:"flex",
      flexDirection: "row",
      justifyContent:"center",
      flexWrap:"wrap",
      paddingTop:"50px"
    }
    const mainMobile={
      width: "100%",
      background: "url(https://assets.rbl.ms/2326929/980x.jpg)",
      backgroundSize:"cover",
      display:"flex",
      flexDirection: "column",
      justifyContent:"center",
      paddingTop:"50px"
    }
    const imgContainer={
      display:"flex",
      flexDirection:"column",
      width:"50%",


    }
    const imgContainerMobile={
      display:"flex",
      flexDirection:"column",
      width:"100%",


    }
    const first={
      width: "150px",
      height:"150px",
      alignSelf:"center",
      textAlign: "center",
      borderRadius:"0, auto",

    }
    const firstMobile={
      width: "100%",
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
      color:"#000000",
      fontSize:"12px"


    }
    const heading={
      width: "100%",
      height:"50px",
      alignSelf:"center",
      textAlign: "center",
      color:"#000000",
      fontFamily:"Railway",
      fontSize:"20px"

    }
    return (
      <main>
        <Responsive minDeviceWidth={1024}>

         <div style={main}>

         <div style={imgContainer}>
           <img style={first} src="https://i1.wp.com/travelmamas.com/wp-content/uploads/2016/08/Double-Helix-Waterslides-square.jpg?resize=400%2C400&ssl=1"/>
           <div>
             <h1 style={heading}>Activities</h1>
             <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
           </div>
         </div>

         <div style={imgContainer}>
           <img style={first} src="http://www.royalsunset.biz/uploads/1/3/2/0/13204792/2438029.jpg"/>
             <div>
              <h1 style={heading}>Ocean</h1>
              <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

             </div>
         </div>

         <div style={imgContainer}>
           <img style={first} src="https://wa4.jetcdn.com/photos/scrub-island-resort-spa-marina-autograph-collection/1fH4WzFr/lagoon-resort-sea-bay.jpeg?x=1402&y=1071&w=400&h=400&dpr=1"/>
             <div>
               <h1 style={heading}>Resorts</h1>
               <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

             </div>

         </div>
         <div style={imgContainer}>
         <img style={first} src="https://wa5.jetcdn.com/v4/static/images/product/properties/ean/8965/src-1048261_113_z.jpg?w=400&h=400&dpr=1"/>
           <div>
             <h1 style={heading}>Contact</h1>
             <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

           </div>
         </div>
         </div>
      </Responsive>
      <Responsive maxDeviceWidth={1023}>
        <div style={mainMobile}>

        <div style={imgContainerMobile}>
          <img style={firstMobile} src="https://i1.wp.com/travelmamas.com/wp-content/uploads/2016/08/Double-Helix-Waterslides-square.jpg?resize=400%2C400&ssl=1"/>
          <div>
            <h1 style={heading}>Activities</h1>
            <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

        <div style={imgContainerMobile}>
          <img style={firstMobile} src="http://www.royalsunset.biz/uploads/1/3/2/0/13204792/2438029.jpg"/>
            <div>
             <h1 style={heading}>Ocean</h1>
             <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            </div>
        </div>

        <div style={imgContainerMobile}>
          <img style={firstMobile} src="https://wa4.jetcdn.com/photos/scrub-island-resort-spa-marina-autograph-collection/1fH4WzFr/lagoon-resort-sea-bay.jpeg?x=1402&y=1071&w=400&h=400&dpr=1"/>
            <div>
              <h1 style={heading}>Resorts</h1>
              <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            </div>

        </div>
        <div style={imgContainerMobile}>
        <img style={firstMobile} src="https://wa5.jetcdn.com/v4/static/images/product/properties/ean/8965/src-1048261_113_z.jpg?w=400&h=400&dpr=1"/>
          <div>
            <h1 style={heading}>Contact</h1>
            <p style={paragraphStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          </div>
        </div>
        </div>
      </Responsive>

      </main>





    );
  }
}

export default Main;

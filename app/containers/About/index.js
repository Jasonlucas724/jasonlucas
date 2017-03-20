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
    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <header>
           <nav>
             <Link to="/">Home</Link>
               <Link to="/about">About</Link>
                 <Link to="/gallery">Gallery</Link>
           </nav>
        </header>


        <main>
        </main>


        <footer>
        </footer>



      </div>
    );
  }
}
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
import Responsive from "react-responsive";
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";

export default class Home extends React.PureComponent {
  render() {



    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>



           <Header/>
           <Main/>
           <footer/>






      </div>
    );
  }
}

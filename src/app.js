import React from 'react';
import SettingsProvider from './context/context';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './app.scss';
import LoginContext from "./context/LoginContext"
import ToDo from './components/todo';
import Login from './components/login';
export default class App extends React.Component {
  render() {
    return (
      <LoginContext>
      <Login/>
    
        <SettingsProvider>
          <ToDo />
        </SettingsProvider>
    
    </LoginContext>
    );
  }
}
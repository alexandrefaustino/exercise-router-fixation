import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {  
  render() {
    const {name, password} = this.props.user;            
    if (name === "joão" && password === "123") return (<p>Seja bem vindo João</p>)
    else alert("Acesso negado");
    return (<Redirect to="/" />)
  }
}

export default StrictAccess;
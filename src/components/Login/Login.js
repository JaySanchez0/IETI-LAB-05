import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import {Button, TextField, Snackbar, SnackbarContent} from '@material-ui/core';

function start(user,password,setCorrect){
    if(localStorage.getItem("users")==null) {
        setCorrect(false);
        return ;
    }
    var exist = false;
    console.log(localStorage.getItem("users"));
    JSON.parse(localStorage.getItem("users")).forEach((pair)=>exist = exist || (user==pair.email && password==pair.pw));
    if(exist){
         localStorage.setItem("isLogged",true);
    }
    setCorrect(false);
}
export default function Login(props){
    const [user,setUser] = useState("");
    const [pw,setPW] = useState("");
    const [reg,setReg] = useState(false);
    const [correct,setCorrect] = useState(true);
    if(localStorage.getItem("users")==null){
        localStorage.setItem("users",JSON.stringify([{"email":"jay@mail.com",pw:"test"}]));
    }
    if(localStorage.getItem("isLogged")){
        return <Redirect to="/planer"></Redirect>;
    }
    if(reg) return <Redirect to="/signup"/>;
    const CloseMenssage = (
        <Button color="secondary" size="small" onClick={()=>setCorrect(true)}><CloseIcon style={{background:'white'}}></CloseIcon></Button>
    );
    return (<div id="login" style={{width:'100%',height:'100hv',background:'orange',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'600px',height:'380px',background:'white',display:'block',borderRadius:'10px'}}>
            <div style={{textAlign:'center'}}><h1>Iniciar sesion</h1></div>
            <div style={{background:'red',height:'1px'}}></div>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <TextField label="Correo" value={user} onChange={(e)=>setUser(e.target.value)} style={{width:'90%'}}/></div>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <TextField type="password" value={pw} label="Contraseña" style={{width:'90%'}} onChange={(e)=>setPW(e.target.value)}/></div>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Button style={{border:'1px solid orange'}} onClick={()=>start(user,pw,setCorrect)}>Iniciar sesion</Button></div>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}><Button style={{border:'1px solid orange'}} onClick={()=>setReg(true)}>Registrarse</Button></div>
            <div style={{height:'30px'}}></div>
            <Snackbar open={!correct}>
                <SnackbarContent style={{background:'red'}} message="Usuario y/o contraseña incorrectos, por favor verifique." action={CloseMenssage}></SnackbarContent>
            </Snackbar>
        </div>
    </div>);
}
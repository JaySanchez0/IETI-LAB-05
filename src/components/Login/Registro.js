import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import {Button, TextField, Snackbar, SnackbarContent} from '@material-ui/core';

export default function Registro(props){
    const [user,setUser] = useState("");
    const [pw,setPW] = useState("");
    const [rpw,setRPW] = useState("");
    const [name,setName] = useState(null);
    const [correct,setCorrect] = useState(true);
    const registrarse = ()=>{
        if((pw==rpw && pw=="") || pw!=rpw){
            setCorrect(false);
            return ;
        }
        const users = JSON.parse(localStorage.getItem("users"));
        console.log(users);
        users.push({email:user,pw:pw});
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("isLogged",true);
        console.log(users);
        setUser("");
        setPW();

    }
    if(localStorage.getItem("users")==null){
        localStorage.setItem("users",JSON.stringify([{"email":"jay@mail.com",pw:"test"}]));
    }
    if(localStorage.getItem("isLogged")){
        return <Redirect to="/planer"></Redirect>;
    }
    const CloseMenssage = (
        <Button color="secondary" size="small" onClick={()=>setCorrect(true)}><CloseIcon style={{background:'white'}}></CloseIcon></Button>
    );
    return (<div id="login" style={{width:'100%',height:'100hv',background:'orange',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'600px',height:'490px',background:'white',display:'block',borderRadius:'10px'}}>
            <div style={{textAlign:'center'}}><h1>Registro</h1></div>
            <div style={{background:'red',height:'1px'}}></div>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <TextField label="Nombre" value={name} onChange={(e)=>setName(e.target.value)} style={{width:'90%'}}/></div>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <TextField label="Correo" value={user} onChange={(e)=>setUser(e.target.value)} style={{width:'90%'}}/></div>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <TextField type="password" value={pw} label="Contraseña" style={{width:'90%'}} onChange={(e)=>setPW(e.target.value)}/></div>
                <div style={{height:'30px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <TextField type="password" value={rpw} label="Retry Contraseña" style={{width:'90%'}} onChange={(e)=>setRPW(e.target.value)}/></div>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Button style={{border:'1px solid orange'}} onClick={()=>registrarse()}>Registro</Button></div>
            <div style={{height:'30px'}}></div>
        </div>
        <Snackbar open={!correct}>
                <SnackbarContent style={{background:'red'}} message="Datos incorrectos verifica tu contraseña." action={CloseMenssage}></SnackbarContent>
            </Snackbar>
    </div>);
}
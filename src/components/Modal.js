import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {TextField, Button} from '@material-ui/core';

export default function Modal(props){
    const [descripcion,setDescripcion] = React.useState("");
    const [estado,setEstado] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [name,setName] = React.useState("");
    var addTask=()=>{
        var task = {
            "description":descripcion,
            "responsible":{
                "name":name,
                "email":email
            },
            "status":estado,
            "dueDate":new Date()

        };
        props.addTask(task);

    }
    return(
        <Dialog open={props.open}>
        <DialogContent>
          <div style={{width:'500px'}}>
            <h1>Nueva Actividad</h1>
            <TextField value={descripcion} onChange={(e)=> setDescripcion(e.target.value)} type="text" style={{width:'90%'}} label="Descripcion"></TextField>
            <div style={{width:'100%',height:'20px'}}></div>
            <TextField value={estado} onChange={(e)=>setEstado(e.target.value)} type="text" style={{width:'90%'}} label="Estado"></TextField>
            <div style={{width:'100%',height:'20px'}}></div>
            <TextField value={name} onChange={(e)=>setName(e.target.value)} type="text" style={{width:'90%'}} label="Nombre encargado"></TextField>
            <div style={{width:'100%',height:'20px'}}></div>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)} type="text" style={{width:'90%'}} label="Correo encargado"></TextField>
            <div style={{width:'100%',height:'50px'}}></div>
            <center><Button onClick={(e)=>addTask()}>Añadir</Button></center>
            <div style={{width:'100%',height:'20px'}}></div>
            <center><Button onClick={(e)=>props.close()}>Close</Button></center>
          </div>
        </DialogContent>
      </Dialog>);
}
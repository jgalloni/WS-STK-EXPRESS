import Proyectos from "../models/Proyectos";
import express from 'express';

var router = express.Router();

//listar todas los proyectos
router.get("/",(req,res,next)=>{
    res.send("asdasd");
});

//get proyecto por id
router.get("/:id",(req,res,next)=>{
    res.end();
});

//save proyecto
router.post("/",(req,res,next)=>{
    res.end();
});

//actualizar proyecto
router.put("/",(req,res,next)=>{
    res.end();
});

//borrar proyecto
router.delete("/",(req,res,next)=>{
    res.end();
});

export default router;
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-buscar-imagenes',
  templateUrl: './buscar-imagenes.component.html',
  styleUrls: ['./buscar-imagenes.component.css']
})
export class BuscarImagenesComponent implements OnInit {
  seleccion:string=''
  listcategoria:Array<any>=[
    
    {
    categoria:'science'
    },
    {
    categoria:'education'
    },
    {
    categoria:'people'
    },
    {
    categoria:'feelings'
    },
    {
    categoria:'computer'
    },
    {
    categoria:'buildings'
    }]
 form:FormGroup
  constructor(private fb:FormBuilder,private toastr: ToastrService,private imagenfile:ImagenesService) { 
    this.form=this.fb.group({
    imagenName:['',Validators.required]
    })
    
  }

  ngOnInit(): void {
  }
  buscarimg(){ 
const {imagenName}= this.form.value
if(imagenName == '' ){
  this.toastr.error('Ingrese el nombre de la imagen','Error')
}
else if(imagenName!=''){
  
  console.log(imagenName)

  this.imagenfile.imagenfile(imagenName)
  console.log(this.imagenfile.imagenencontrada)
 this.imagenfile.enviarTerminoBusqueda(imagenName)

}

}
cambio(){
  this.imagenfile.enviarTerminoBusqueda(this.seleccion)
}
}
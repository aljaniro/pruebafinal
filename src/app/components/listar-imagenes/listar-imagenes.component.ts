import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-listar-imagenes',
  templateUrl: './listar-imagenes.component.html',
  styleUrls: ['./listar-imagenes.component.css']
})
export class ListarImagenesComponent implements OnInit {
  termino = '';
  load =false
  suscription: Subscription;
  imagenes:any[]=[]
  pagination=false
  cantidad=30
  actual:any
  total=0
  resultado:any[]=[]
  
  imagen:any
 
 
  constructor(private imagenfile:ImagenesService,private toastr: ToastrService) { 
   
    this.suscription = this.imagenfile.getTerminoBusqueda().subscribe(data => {
     this.termino=data
     this.load=true
     this.pagination=true
     this.actual=1
      console.log(data);
     this.mostrar()
    })
  }

  ngOnInit(): void {
    console.log(this.suscription)
    
    
  }
  mostrar(){
    this.imagenfile.getImagenes(this.termino,this.cantidad,this.actual,).subscribe(data =>{
      console.log(data)
      if(data.hits.length == 0){
       this.toastr.error('Imagen no encontrada','Error')
       this.load=false
      }
      else{
        this.toastr.success('Imagen encontrada!', 'Felicitaciones');
        this.imagenes= data.hits
        this.load=false
      }
     this.total= Math.ceil(data.totalHits/this.cantidad)
    })
    
  }
  Anterior(){
    this.actual--
    this.load=true
    this.imagenes=[]
    this.mostrar()
    
  }
  Siguiente(){
    this.actual++
    this.load=true
    this.imagenes=[]
    this.mostrar()
   
      
  }
  activarAnterior(){
    if(this.actual==1){
      return false
    }
    else{
      return true
    }
  }
  activarSiguiente(){
    if(this.actual==this.total){
      return false
    }
    else{
      return true
    }
  }
}

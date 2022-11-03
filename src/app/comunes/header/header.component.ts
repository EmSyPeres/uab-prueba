import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  textoFinal:any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  cargar(texto:any){
    console.log(texto);
    this.textoFinal=texto;
  }

  buscar(){

    this.route.navigate(['/detalle', this.textoFinal]);

  }

  regresar(){
    this.route.navigate(['/cards']);

  }
  
}

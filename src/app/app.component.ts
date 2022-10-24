import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica3';

  mensaje="No hay saldo"

  visualizaDiv=false;

  
  array=[
    {
      nombre:'pedro',
      apellido:'vera'
    },
    {
      nombre:'juan',
      apellido:'murcia'
    },
    {
      nombre:'luis',
      apellido:'cordero'
    },
  ];


  visualiza(){
    this.visualizaDiv=!this.visualizaDiv;
  }

}

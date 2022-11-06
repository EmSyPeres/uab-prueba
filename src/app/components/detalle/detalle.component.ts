import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
  
})
export class DetalleComponent implements OnInit {

 

  heroes= [
    {
      id:"0",
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      id:"1",
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      id:"2",
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      id:"3",
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      id:"4",
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      id:"5",
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      id:"6",
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];

  nombredetalle:any;
  biodetalle:any;
  imgdetalle:any;
  apariciondetalle:any;
  casadetalle:any;
  id: any;
  logo: any;
  numposiblesheroes:any=0;
  arraySearch: string[]=[];
  
  async viajar(idArray:any){
    this.router.navigate(['/detalle', idArray]);
    const sleep = (ms: number | undefined) => new Promise(r => setTimeout(r, ms));
    await sleep(50);
    this.ngOnInit();
  }
    constructor(private route: ActivatedRoute, private router: Router) {
    
   }



  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.arraySearch.splice(0);
    this.numposiblesheroes=0;
    

    for (let j = 0; j < this.heroes.length; j++) {
      if (this.heroes[j].nombre.toLowerCase().indexOf(this.id.toLowerCase()) >=0) {
        this.arraySearch[this.numposiblesheroes]=this.heroes[j].nombre;
        this.numposiblesheroes++;
      }
      
    } 
   
    
     if (this.numposiblesheroes<=1) {
        
      for (let i = 0; i < this.heroes.length; i++) {
     
        if (this.id == this.heroes[i].id || this.heroes[i].nombre.toLowerCase().indexOf(this.id.toLowerCase()) >=0 ) {
           this.nombredetalle=this.heroes[i].nombre;
           this.biodetalle=this.heroes[i].bio;
           this.imgdetalle=this.heroes[i].img;
           this.apariciondetalle=this.heroes[i].aparicion;
           this.logo=this.heroes[i].casa;      
        }
        
       }
    }
    
        
  }


 
}

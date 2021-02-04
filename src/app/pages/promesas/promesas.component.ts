import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuario => {
      console.log(usuario);
    });
    // const promesa = new Promise ((resolve, reject) => {

    //   if(false){
    //     resolve('Hola Mundo')
    //   }else{
    //     reject('Algo salio mal')
    //   }
    // })

    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // }).catch(err =>{
    //   console.log('Error en mi promesa', err);
    // });

    // console.log('Fin del init');
     
  }

  getUsuarios(){

    /*El fetch API que regresa una promesa, 
      es algo que ya viene propio en JavaScript
      y nos permite hacer peticiones HTTP rapidamente
    */
    const promesa = new Promise(resolve =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(resp =>resp.json())
      .then(body =>resolve(body.data));
    });
    return promesa;
    
  }

}

import { rendererTypeName } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

public intervalSubs: Subscription;

  constructor() { 

    let i = -1;

    //Usualmente si es referencia a un observable que quiero almacenar, se le pone simbolo de dolar
    const obs$ = new Observable(observer =>{

      // el observer es quien va estar emitiendo los valores, quien va decir cuando se terminan, cuando da error.
      // Este subscriber es quien va decir como esta el observable y que informacion esta fluyendo a trabes de el

     
      //Esta es una funcion propia de JavaScript que tiene un callback que se va estar ejecutando. Se va disparar cada segundo
      
      const intervalo = setInterval(() =>{
        i++;
        // para notificarle a todas las personas que esten subscritas, de ese nuevo valor emitido, aremos uso del observer
        // el next es el siguiente valor que queremos emitir.
        observer.next(i);

        // para finalizar un observable 
        // Nota: El interval nunca se va cancelar (esta arrriba),  lo asignamos a una constante, para poder limpiarlo o cacelarlo, cuando nosotros quieramos con el clicInterval, mandandole el nombre del intervalo

        if(i === 4){

          // Este codigo es propio de JavaScript, pero es una funcion para cancelar intervalos
          clearInterval(intervalo)
          // Para notificar que ya se cancelo o que ya no vamos a emitir mas valores en este observer
          observer.complete();
        }

        if(i === 2){
          console.log('error');
          observer.error('i llego al valor de 2'); 
        }

      }, 500)
    });

    // El observable con todo su cuerpo no se va ejecutar hasta que no, haya por lo menos una persona subscrita a el.
    // De esta manera es solo lo que se necesita para que el observable comience a trabajar
    // obs$.subscribe(); 

    // Donde ya usamos nuestro observable pero necesitamos hacer algo
    // this.retornarObservable().pipe(
    //      retry(1)
    //    ).
    //    subscribe(
    //      valor => console.log('Subs:', valor),
    //      error => console.log('Error:', error),
    //      // El complit no resive ningun argumento
    //      () => console.info('obs terminado')
    //    );

    this.intervalSubs = this.retornaIntervalo()
    // Todos los argumentos que resiva este subscribe, se los manda a la funcion que declaramos dentro de los parentesis 
    .subscribe(console.log)
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
    
  }

  // El take dice cuantas emisiones del observable se necesitan y automaticamente completa el observable
  // El map sirve para transformar, la informacion que recibe el observable y mutarla de la manera que yo necesito. Y el map recibe el argumento que el observable padre emite 
  // Para extraer solo lo que nos interesa para que mis subscripciones, resivan la informacion tan pulida o tan embruto como sea posible 
  retornaIntervalo(): Observable<number>{
    return interval(500)
       .pipe(
        // take(10),
        map(valor => valor + 1),
        filter( valor => (valor % 2 === 0)? true : false )
        );
  }

  retornarObservable(): Observable<number>{
    let i = -1;

    return new Observable(observer =>{
        const intervalo = setInterval(() =>{
        i++;
        observer.next(i);
        if(i === 4){
          clearInterval(intervalo)
          observer.complete();
        }
        if(i === 2){
          console.log('error');
          observer.error('i llego al valor de 2'); 
        }

      }, 500)
    });
  }

}

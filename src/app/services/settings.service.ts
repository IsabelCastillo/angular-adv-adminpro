import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme') ||`./assets/css/colors/purple-dark.css`;
    console.log(url, 'Pages');
    // Para remplazar el atributo href por el valor que queremos cambiarlo, 
    this.linkTheme.setAttribute('href', url);
   }

   changeTheme(theme: string)
   {

    
     const url = `./assets/css/colors/${theme}.css`;
     // Para remplazar el atributo href por el valor que queremos cambiarlo
     this.linkTheme.setAttribute('href', url);
     // Para guardar un tema en el localStorage 
     // El primer parámetro es el nombre que le vamos a dar
     // y el segundo es el valor que le vamos a asignar.
     localStorage.setItem('theme',url);
     //this.checkCurrentThemes();

     this.checkCurrentThemes();
   }

   checkCurrentThemes(){

    const links= document.querySelectorAll('.selector'); 
    //  Funcion sincrona
      links.forEach(elem =>{ 
        //Borrar la clase de un elemento
        elem.classList.remove('working');
        const btnTheme = elem.getAttribute('data-theme');
        const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
        const currentTheme = this.linkTheme.getAttribute('href');
        if(btnThemeUrl === currentTheme)
        {
          // Para agregarle una clase a un elemento usamos la propiedad "add" seguido de la clase
          elem.classList.add('working'); 
        }
  
      })
    }
}

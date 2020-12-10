import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settingsService:  SettingsService) { }

  ngOnInit(): void {

    customInitFunctions();
    // //Aquí el setItem que teníamos se cambió por getItem
    // // porque ahora estamos obteniendo el dato.
    // const url = localStorage.getItem('theme') ||`./assets/css/colors/purple-dark.css`;
    // console.log(url, 'Pages');
    // // Para remplazar el atributo href por el valor que queremos cambiarlo, 
    // this.linkTheme.setAttribute('href', url);
  }
}

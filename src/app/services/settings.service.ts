import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector("#theme");

  constructor() {
    
    this.setTheme();
    
   }

   private setTheme(){

    const defaultTheme = './assets/css/colors/default-dark.css';
    const theme = localStorage.getItem('theme') || defaultTheme;

    this.linkTheme.setAttribute('href', theme);

  }

  changeTheme(theme : string ){
    
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);

    localStorage.setItem('theme', url);

    this.checkCurrenttheme();

  }

  checkCurrenttheme(){

    const links = document.querySelectorAll(".selector");

    links.forEach(q => {
      q.classList.remove('working');
      const btnTheme = q.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        q.classList.add('working');
      }

    })

  }

}

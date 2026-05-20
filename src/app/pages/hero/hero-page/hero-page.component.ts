import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  // imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name= signal('Ironman');
  age= signal(45);

  heroDescription=computed(() =>{
    const heroDescription=`${this.name()} - ${this.age()}`;
    return heroDescription;
  }
  );

  capitalizeName= computed(()=>{
    const capitalizedName=this.name().toUpperCase();
    return capitalizedName;
  }
  )

  changeHero(){
    console.log('Cambiando hero');
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(){
    console.log('Cambiando edad');
    this.age.set(60);
  }

  resetForm(){
    console.log('Resetting form');
    this.name.set('Ironman');
    this.age.set(45);
  }

}

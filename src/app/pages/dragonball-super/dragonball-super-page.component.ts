import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../../services/dragonball.service';


@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
  
})
export class DragonballSuperPageComponent {

  //Inyeccion de dependencias tradicional
  // constructor(
  //   public dragonballService: DragonballService
  // ) {}

  //Inyeccion de dependencias con decorador
  dragonballService = inject(DragonballService);

  
}



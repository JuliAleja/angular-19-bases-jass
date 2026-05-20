import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    // { id: 2, name: 'Vegeta', power: 9000 },
    // { id: 4, name: 'Yamcha', power: 500 },
    // { id: 3, name: 'Piccolo', power: 8000 },
  ]);
  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters.update((chars) => [...chars, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set("");
    this.power.set(0);
  }
}



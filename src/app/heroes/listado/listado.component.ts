import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] = ['Spider Man', 'Batman', 'Hulk', 'Iroman'];
  heroeBorrado:string='';

  borraHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}

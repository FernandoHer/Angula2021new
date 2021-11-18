import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent{
    nombre: string = "Iroman";
    edad:number = 43;

    get capitalizarNombre():string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void{
        this.nombre='Spiderman';
    }
    cambiarEdad(): void {
        this.edad= 21;
    }

    obtenerNombre():string {
        return ` ${this.nombre} tiene una edad de  ${this.edad} `
    }
}
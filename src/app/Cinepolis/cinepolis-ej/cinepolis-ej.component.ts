import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis-ej',
  templateUrl: './cinepolis-ej.component.html',
  styleUrl: './cinepolis-ej.component.css'
})
export class CinepolisEjComponent {

  nombre:string | null = null;
  boletosCantidad: number = 1;
  Cineco: boolean = false;
  precioF: number | null = null;
  precioBol: number = 12;
  maxBoletos: number = 7;
  personasCantidad: number = 1;

  MaxBoletos(): void {
    this.maxBoletos = this.personasCantidad * 7;
  }

  calcularPrecio(): void {
    let desc = 0;

    if (this.boletosCantidad > 5) {
      desc = 0.15;
    } else if (this.boletosCantidad >= 3 && this.boletosCantidad <= 5) {
      desc = 0.10;
    }

    let precioTotal = this.precioBol * this.boletosCantidad;

    precioTotal = precioTotal - (precioTotal * desc);

    if (this.Cineco) {
      precioTotal = precioTotal - (precioTotal * 0.10);
    }

    this.precioF = precioTotal;
  }

}

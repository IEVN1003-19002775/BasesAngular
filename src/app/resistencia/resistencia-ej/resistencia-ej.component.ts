import { Component} from '@angular/core';

@Component({
  selector: 'app-resistencia-ej',
  templateUrl: './resistencia-ej.component.html',
  styleUrl: './resistencia-ej.component.css'
})
export class ResistenciaEjComponent{

  colores: { nombre: string, valor: number }[] = [
    { nombre: 'Negro', valor: 0 },
    { nombre: 'Marrón', valor: 1 },
    { nombre: 'Rojo', valor: 2 },
    { nombre: 'Naranja', valor: 3 },
    { nombre: 'Amarillo', valor: 4 },
    { nombre: 'Verde', valor: 5 },
    { nombre: 'Azul', valor: 6 },
    { nombre: 'Violeta', valor: 7 },
    { nombre: 'Gris', valor: 8 },
    { nombre: 'Blanco', valor: 9 }
  ];

  multiplicadores: { nombre: string, valor: number }[] = [
    { nombre: 'Negro', valor: 1 },
    { nombre: 'Café', valor: 10 },
    { nombre: 'Rojo', valor: 100 },
    { nombre: 'Naranja', valor: 1000 },
    { nombre: 'Amarillo', valor: 10000 },
    { nombre: 'Verde', valor: 100000 },
    { nombre: 'Azul', valor: 1000000 },
    { nombre: 'Violeta', valor: 10000000 },
    { nombre: 'Gris', valor: 100000000 },
    { nombre: 'Blanco', valor: 1000000000}
  ];

  colorMap: { [key: number]: string } = {
    0: 'black',
    1: 'brown',
    2: 'red',
    3: 'orange',
    4: 'yellow',
    5: 'green',
    6: 'blue',
    7: 'purple',
    8: 'gray',
    9: 'white'
  };

  colorMapM: { [key: number]: string } = {
    1: 'black',
    10: 'brown',
    100: 'red',
    1000: 'orange',
    10000: 'yellow',
    100000: 'green',
    1000000: 'blue',
    10000000: 'purple',
    100000000: 'gray',
    1000000000: 'white'
  };

  colorMapT: { [key: number]: string } = {
    0: '',
    0.05: 'yellow',
    0.1: 'gray'
  };

banda1: number = 0;
banda2: number = 0;
multiplicador: number = 0;
toleranciaOro: boolean = false;
toleranciaPlata: boolean = false;
tolerancia: number = 0;
resultado: string = '';
valorMax: number = 0;
valorMin: number = 0;
color1: string | number = 0;
color2: string | number = 0;
color3: string | number = 0;
color4: string | number = 0;


calcular() {

  const valor = (this.banda1 + this.banda2) * this.multiplicador;

  this.tolerancia = this.toleranciaOro ? 0.05 : this.toleranciaPlata ? 0.1 : 0;
  
  this.resultado = `${valor}`;

  const valorMax = valor + (valor * this.tolerancia);
  this.valorMax = valorMax;

  const valorMin = valor - (valor * this.tolerancia);
  this.valorMin = valorMin;

  this.color1 = this.colorMap[this.banda1] || this.banda1;
  this.color2 = this.colorMap[this.banda2] || this.banda2;
  this.color3 = this.colorMapM[this.multiplicador] || this.multiplicador;
  this.color4 = this.colorMapT[this.tolerancia] || this.tolerancia;
}

}

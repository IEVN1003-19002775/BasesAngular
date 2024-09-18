import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title = "Saluno de variable"

  imageWidth: number = 50;
  imageMargi: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:any[] = [
    {
      "productoId": 1,
      "Modelo": 'Sentra',
      "Descripcion": "4 puertas familiar",
      "year": "febrero 3 2022",
      "Precio": 20000,
      "Marca": "NISSAN",
      "Color": "Morado",
      "imagenUrl": "https://carsline.com.mx/wp-content/uploads/2023/10/03Nissan-Sentra-Exclusive-Morado-2020-6831.jpg"
    },
    {
      "productoId": 2,
      "Modelo": 'A4',
      "Descripcion": "2 puertas",
      "year": "marzo 3 2023",
      "Precio": 30000,
      "Marca": "AUDI",
      "Color": "Blanco",
      "imagenUrl": "https://imganuncios.mitula.net/medium/audi_2014_gasolina_audi_a1_gasolina_8920031709665639456.jpg"
    },
    {
      "productoId": 3,
      "Modelo": 'Rio',
      "Descripcion": "4 puertas familiar",
      "year": "Agosto 3 2022",
      "Precio": 60000,
      "Marca": "KIA",
      "Color": "Azul",
      "imagenUrl": "https://carsline.com.mx/wp-content/uploads/2023/10/03-10.jpg"
    }
  ]

}

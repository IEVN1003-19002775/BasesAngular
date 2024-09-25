import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencia-ej',
  templateUrl: './resistencia-ej.component.html',
  styleUrl: './resistencia-ej.component.css'
})
export class ResistenciaEjComponent implements OnInit{

  color1!:FormGroup;
  color2!:FormGroup;
  color3!:FormGroup;
  ne:string = "0"; neX:number = 1;
  ca:string = "1"; caX:number = 10;
  ro:string = "2"; roX:number = 100;
  na:string = "3"; naX:number = 1000;
  am:string = "4"; amX:number = 10000;
  ve:string = "5"; veX:number = 100000;
  az:string = "6"; azX:number = 1000000;
  vi:string = "7"; viX:number = 10000000;
  gr:string = "8"; grX:number = 100000000;
  bl:string = "9"; blX:number = 1000000000;

  do:number = .05;
  pl:number = .1;

  subT:number = 0;
  total:number = 0;
  minT:number = 0;
  maxT:number =0;

  constructor(){}
  ngOnInit(): void {
    
  }

  multNumeros(): void{
    
  }

}

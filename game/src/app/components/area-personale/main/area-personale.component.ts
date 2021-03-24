import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-area-personale',
  templateUrl: './area-personale.component.html',
  styleUrls: ['./area-personale.component.scss']
})
export class AreaPersonaleComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  areaPersonaleForm:FormGroup

  mesiSelect = [
    {label:'Gennaio'},
    {label:'Febbraio'}, 
    {label:'Marzo'},
    {label:'Aprile'},
    {label:'Maggio'}, 
    {label:'Giugno'},
    {label:'Luglio'},
    {label:'Agosto'},
    {label:'Settembre'},
    {label:'Ottombre'},
    {label:'Novembre'},
    {label:'Dicembre'}
  ]

  giorniSelect = []
  anniSelect = []

  ngOnInit(): void {

    for(let i = 1; i<=31; i++){
      this.giorniSelect.push({label:i})
    }

    for(let i = 1970; i<=2021; i++){
      this.anniSelect.push({label:i})
    }

    this.areaPersonaleForm = this.fb.group({
      nome: [''],
      cognome: [''],
      email: [''],
      password: ['']
    })

    console.log(this.mesiSelect)
  }

}

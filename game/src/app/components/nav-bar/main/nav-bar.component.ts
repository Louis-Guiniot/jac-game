import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  pagine = [
    {url:'home',label:'home'},
    {url:'chi-siamo',label:'chi siamo'},
    {url:'dove-siamo',label:'dove siamo'},
    {url:'valori',label:'i nostri valori'},
    {url:'pagina-candidatura',label:'candidati'},
  ]

  ngOnInit(): void {
  }

}

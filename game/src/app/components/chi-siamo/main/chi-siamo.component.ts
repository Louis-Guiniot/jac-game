import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.scss']
})
export class ChiSiamoComponent implements OnInit {

  constructor() { }

  corso1 = [
    {desc:'Project work',hour:'30'},{desc:'Incontri con Realt&agrave; aziendali',hour:'15'},{desc:'Programmazione orientata agli oggetti',hour:'90'},{desc:'Programmazione web I',hour:'90'},
    {desc:'Project work',hour:'30'},{desc:'Programmazione back-end e PHP',hour:'45'},{desc:'Web app e User Experience',hour:'90'},{desc:'Programmazione SQL del database',hour:'45'},
    {desc:'English Coaching I',hour:'60'},{desc:'Business system and approach to work I',hour:'30'},{desc:'Fogli di lavoro',hour:'30'},{desc:'Estetica del lavoro I',hour:'45'}  
  ]

  ngOnInit(): void {
  }

}

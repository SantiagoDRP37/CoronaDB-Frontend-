import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  listPersonas:any =[
    {nombre:'JhonSmith',
      cc: '123456',
      temp: 40.90
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

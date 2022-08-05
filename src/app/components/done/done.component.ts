import { Component, Input, OnInit } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDuneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
  
})
export class DoneComponent implements OnInit {
  @Input() doneModels:DoneModel[];
  @Input () unDoneModels:UnDuneModel[];
  constructor() { }

  ngOnInit(): void {
  }

  changeDoneItem(doneModel:any)
  {
    this.unDoneModels.push(doneModel); //yapılacaklara ekliyor.
    let index=this.doneModels.indexOf(doneModel); //indexini aldık
    this.doneModels.splice(index,1); //tamamlananlardan kaldırdık.

  }

}

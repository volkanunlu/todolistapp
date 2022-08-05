import { Component, Input, OnInit } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDuneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent implements OnInit {

  @Input () unDoneModels:UnDuneModel[];
  @Input () doneModels:DoneModel[];
  constructor() { }

  ngOnInit(): void {
  }

  updateUndoneItem(doneModel:any){
    this.doneModels.push(doneModel); //tamamlananlara ekliyor
    let index= this.unDoneModels.indexOf(doneModel); //yapılacaklar listesinde indexini buluyoruz silmek adına.
    this.unDoneModels.splice(index,1); //yapılacaklardan siliyor.
  }
   
  

  deleteUndoneItem(doneModel:any){
    let index=this.unDoneModels.indexOf(doneModel); //indexini aldık.
    this.unDoneModels.splice(index,1); //silme işlemini gerçekleştirdik.
  }

}

import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DoneModel } from '../../models/doneModel';
import { UnDuneModel } from '../../models/unDoneModel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class HomeComponent implements OnInit {

  @ViewChild ("addInput") addInput:ElementRef;

  constructor() {
    // console.log("constructor çalıştı.")
   }

  ngOnInit(): void {
    // console.log("ngOnInit çalıştı.")

  }

  ngOnChanges(){
    // console.log("ngOnChanges çalıştı.")

  }
  ngDoCheck(){
    // console.log("ngDoCheck çalıştı.")

  }

  ngAfterViewInit(){
    // console.log("ngAfterViewInit çalıştı.")

  }

  ngAfterViewChecked(){
    // console.log("ngAfterViewChecked çalıştı.")

  }
  ngOnDestroy(){
    // console.log("ngOnDestroy çalıştı.")

  }

  unDoneModels:UnDuneModel[]=[]; //modelleri dahil ettim çağırdım.
  doneModels:DoneModel[]=[]; //modelleri dahil ettim çağırdım.

  addUndoneItem(addInput:any){ // : any de kullanabilirsin.

    let unDoneModel=new UnDuneModel;
    unDoneModel.title=this.addInput.nativeElement.value;  //elementi referansla çekip element özelliğini kullandık.
    unDoneModel.date=Date();
    this.unDoneModels.push(unDoneModel);
    addInput.value="";
   }





  

}

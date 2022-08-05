import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UnDuneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() unDoneModels:UnDuneModel[];
  constructor() { }
 
  // @ContentChild ("addInput") addInput:ElementRef;
  // addUndoneItem(){ NGMODEL KULLANDIĞIMIZ ALAN 

  //   let UnDoneModel=new UnDoneModel();
  //   UnDoneModel.title=this.unDoneInput;
  //   UnDoneModel.date=Date();
  //   this.unDoneModels.push(UnDoneModel);
  // }

  ngOnInit(): void {

  }
  // ngAfterViewChecked(){
  //   console.log(this.addInput.nativeElement.value);
  // }

  


  

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-num-picker',
  templateUrl: './num-picker.component.html',
  styleUrls: ['./num-picker.component.css']
})
export class NumPickerComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<String>();

  numPicker = [
      [{v:1 }, {v:2 },{v:3 },],
      [{v:4 }, {v:5 },{v:6 },],
      [{v:7 }, {v:8 },{v:9 },]
  ]

  constructor(
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    console.log("mo")
  }

  valueFilled(val:any):void{
    this.messageEvent.emit(val);
  }
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

 @Input() message : string ="";
@Output() closed = new EventEmitter<void>();

 

  ngOnInit(): void {
  }

  onClose(){
    this.closed.emit();
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss']
})
export class ModalListComponent implements OnInit {

  @Input() isList: Boolean;
  @Output() isListClose = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
    console.log(this.isList);
    
  }

  onCloseListModal(): void {
    this.isList = !this.isList;
    this.isListClose.emit();
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() selList;
  constructor() { }

  ngOnInit(): void {
    console.log(this.selList);
    this.selList = 'gkgk';
  }
  

}

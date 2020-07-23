import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { BoardService, ListService } from '../../core/apis/index';
import { Board } from '../../core/models/index';

import { NewBoardModalComponent } from '../../view/board/new-board-modal/new-board-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selBoard: Board;
  searchField: FormControl;
  // @Input() selBoard: Board;

  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.onSearchInit();
  }

  onSearchInit(): void {

    if (this.searchField) {
      this.searchField.setValue('');
      return;
    }
    this.searchField = new FormControl();
    // this.searchField.valueChanges.pipe(
    //     debounceTime(300),
    //     distinctUntilChanged(),
    //     map((e: KeyboardEvent) => this.searchField.value),
    //     filter(term => {
    //         if (term === undefined) {
    //             return false;
    //         }

    //         if (/[\d -]+/g.test(term)) {
    //             term = term.replace(/-/gi, '');
    //         }

    //         this.ngProgress.start();
    //         this.page.pageNo = 1;
    //         this.page.searchText = term;
    //         return true;
    //     }),
    //     switchMap(term => this.dbService.searchByArchive(this.page))
    // ).subscribe(
    //     res => {
    //         this.ngProgress.done();
    //     },
    //     error => {
    //         this.ngProgress.done();
    //     }
    // );
  }

  onClearSearchText($event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.searchField.setValue('');
  }

  onTextFocus(): void {

  }

  onModalOpen($event): void {
    $event.preventDefault();
    $event.stopPropagation();

    this.modalRef = this.modalService.show(NewBoardModalComponent,
      { 'initialState': { 'selBoard': null } }
    );

    const subscriber = this.modalService.onHide.subscribe(
      res => {
        subscriber.unsubscribe();
      }
    );
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { List } from '../../../core/models/index';
import { ListService } from '../../../core/apis/index';
import { BaseComponent } from 'src/app/core/components';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss']
})
export class ModalListComponent extends BaseComponent implements OnInit {

  @Input() isList: Boolean;
  @Output() isListClose = new EventEmitter;
  @Input() selList: List;
  @Output() isArchive = new EventEmitter;

  constructor(
    protected toastService: ToastrService,
    private listService: ListService, 
  ) {
    super(toastService);
  }

  //////////////////////////////////////////////////////////////////////////////////
  //
  //   Component Lifecycle Methods
  //
  //////////////////////////////////////////////////////////////////////////////////

  ngOnInit(): void {
    // console.log(this.isList);

  }

  //////////////////////////////////////////////////////////////////////////////////
  //
  //   Component Data Manipulation Methods
  //
  //////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////
  //
  //	 Component View Events Methods
  //
  //////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////
  //
  //	 Component View Events Methods
  //
  //////////////////////////////////////////////////////////////////////////////////


  onCloseListModal(): void {
    this.isList = !this.isList;
    this.isListClose.emit();
  }

  //////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

  onArchive($event): void {
    $event.preventDefault();
    $event.stopPropagation();

    this.listService.deleteList(this.selList, this.selList.id).subscribe(
      res => {
        this.showSuccess('', '삭제되었습니다.');
        this.onCloseListModal();
      },
      error => {
        this.showError(null, 'Board 삭제 시 오류가 발생하였습니다.')
      }
    );
  }

  //////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Subscription Methods
	//
	//////////////////////////////////////////////////////////////////////////////////



	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Private Methods
	//
	//////////////////////////////////////////////////////////////////////////////////
}

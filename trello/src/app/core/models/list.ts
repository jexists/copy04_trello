
export class List {

  id: string;
  listTitle: string;
  listPosNo: string;

  listCreateDate: string;
  listEditDate: string;

  boardId: string;

  constructor(json?: any) {
    if(!json) { return; }

    for(let key in json) {
      this[key] = json[key];
    }
  }
}

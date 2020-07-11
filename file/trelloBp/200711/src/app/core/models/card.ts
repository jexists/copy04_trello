
export class Card {

  id: string;
  cardTitle: string;
  cardPosNo: number;
  
  cardCreateDate: string;
  cardEditDate: string;

  boardId: string;
  listId: string;

  constructor(json?: any) {
    if(!json) { return; }

    for(let key in json) {
      this[key] = json[key];
    }
  }
}
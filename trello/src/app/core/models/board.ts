

export class Board {
  
  id: string;
  boardTitle: string;
  boardPosNo: number;
  boardBg: string;
  starYN: boolean;
  accessYN: string;

  boardCreateDate: string;
  boardEditDate: string;

  teamId: string;
  userId: string;

  constructor(json?: any) {
    if(!json) { return; }

    for(let key in json) {
      this[key] = json[key];
    }
  }
}
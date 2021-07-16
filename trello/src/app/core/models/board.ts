
export class Board {
  boardUUID?: number;
  id?: string;
  boardTitle?: string;
  boardPosNo?: number;
  boardBg?: string;
  starYN?: boolean;
  accessYN?: boolean;

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
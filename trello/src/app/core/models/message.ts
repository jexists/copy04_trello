export class messMessage {
	target: any;
  type: number = -1;	
  
  //0: selected, 1:unselected, 2:added, 3:deleted, 4:updated, 5: updated request 6:copy requested, 7:copy confirmed, 8:delete requested, 9:delete confirmed,
						
	extra: any;
	search: any;
	
	constructor(target, type){
		this.target = target;
		this.type = type;
	}
}
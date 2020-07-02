import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Board } from "../models"

import { Board, List } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
	static genID() {
		throw new Error("Method not implemented.");
	}

  constructor() { }

  createDb() {
    const teams = [
      { id: '3a3fddcb-21a0-825d-b573-8a13fe6c24f3', teamName:'개발팀'},
      { id: '325ee323-5fa7-fffb-c123-3b9b130060c2', teamName: '광고운영팀'}
    ];

    const boards = [
      { id: "e62a0202-f309-15fd-1519-77f0a6c356a6", boardTitle: '테스트용',boardPosNo: 100000, boardBg: '#86373a', starYN: false, accessYN: '10', boardCreateDate:'2020-03-02 22:22:22', boardEditDate: '2020-04-23 20:44:23', teamId: '325ee323-5fa7-fffb-c123-3b9b130060c2',
      userId:'a7cdf232-e2f2-d6d8-4593-3e2cb68c9a4a'},
      { id: "c051c08a-888b-706f-ba0f-00f91ef0eaa2", boardTitle: 'test', boardPosNo: 300000, boardBg: '#cc8813', starYN: false, accessYN: '10',
      boardCreateDate:'2020-03-02 22:22:22', boardEditDate: '2020-04-23 20:44:23', teamId: '325ee323-5fa7-fffb-c123-3b9b130060c2' ,
      userId:'a7cdf232-e2f2-d6d8-4593-3e2cb68c9a4a'},
      { id: "f25f531e-6202-361c-eea8-bf1ed81acf50", boardTitle: '보드 삭제가능',boardPosNo: 200000, boardBg: '#fe832e', starYN: false, accessYN: '20', boardCreateDate:'2020-03-02 02:02:22', boardEditDate: '2020-07-23 20:44:23', teamId: '3a3fddcb-21a0-825d-b573-8a13fe6c24f3',
      userId:'a7cdf232-e2f2-d6d8-4593-3e2cb68c9a4a' }
    ];
    
    const lists = [
      { id:'970cf242-81c4-9ef6-92c3-3a250f106b75', boardId: "e62a0202-f309-15fd-1519-77f0a6c356a6", listTitle: '리스트 테스트', listPosNo: 100000},
      { id:'9c8287db-d478-b5cf-535b-b997f544ee52', boardId: "c051c08a-888b-706f-ba0f-00f91ef0eaa2", listTitle: '리스트2', listPosNo: 200000},
      { id:'6a281328-f9ad-dd21-7038-2ab3594f9080', boardId: "c051c08a-888b-706f-ba0f-00f91ef0eaa2", listTitle: '리스트3', listPosNo: 300000},
    ];

    const cards = [
      { id: "798b9c56-732d-92a2-f046-7a08604902bd", cardTitle: '카드 테스트', cardPosNo: 100000, boardId: "e62a0202-f309-15fd-1519-77f0a6c356a6", listId: "970cf242-81c4-9ef6-92c3-3a250f106b75" }
    ]
    return { boards, lists, cards };
    
  }



// a49d45bb-e77e-1bd5-269b-94a3b61b4e63
// 8133f55d-d02f-ae1c-c6fb-951293f7e206
// 6e319636-f2a5-cd28-791d-607a433e307e
// 75054b3c-c284-95e6-4832-775043b3255c
// 1b883fc6-6c58-3e7b-a292-b2d9b6a46abc
// ce7b6c9f-1e9e-a2f3-79ea-570f10b8a6c1
// 7b7e5e6d-830c-cfb1-38bb-736c56cd416f
// 7146b8e0-a2de-89f8-aabf-d80b73fea475
// 41ef3049-e16d-3645-8cea-9df16a6c61ad
// 6a579d5d-95b2-b120-489a-46b37e8fd21b
// 4d1b6c34-753b-8166-8b7c-509592615d9f
// 84f7551a-d48b-86e7-aba7-9f6b7df3c7a2
// c63583f9-1829-8c2a-f301-4ef26bb92a8e
// ab50c347-1408-a098-b0fc-739f93110c84
// 771cc8c5-ac4d-cc62-cf45-e99df2026320
// 9b528016-1834-35d3-045b-2d83cbff20e1
// f4f9916f-bb25-da71-a840-7fa3c5f2268b
// d945ce84-4819-44bc-965c-d11eb4a67f04
// f5656a1e-191c-08e8-b6b8-54a66cbb7204
// c220aed0-e7f3-6dd8-1be1-57e0162e6619
  

  // genID(boards: Board[]): string {
  //   return boards.length > 0 ? Math.max(...boards.map(board => board.id)) + 1 : 0;
  // }


}

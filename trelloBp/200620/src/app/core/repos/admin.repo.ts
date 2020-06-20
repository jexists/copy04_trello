import { Injectable } from '@angular/core';

import {
  Board,
  List,
  Card
} from '../models/index';

@Injectable() export class AdminRepo {

  private boardAccessCodes: 
    Object[] = [
      {'code':'10', 'value': 'Private', 'class':'fas fa-lock', 'description1':'Only board members can see and edit this board.', 'description2':null},
      {'code':'20', 'value': 'Public','class':'fas fa-globe-americas', 'description1':'Anyone on the internet (including Google) can see this board.', 'description2':'Only board members can edit.'}];

  getAccessCode(): any[] {
    return this.boardAccessCodes;
  }



}

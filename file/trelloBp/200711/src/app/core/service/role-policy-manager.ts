import { Injectable } from '@angular/core';

import { User } from '../models/index';

@Injectable() export class RolePolicyManager {
  private curUser: User;

  clearCurrentUser() {
    this.curUser = null;
    localStorage.removeItem('trello-user');
  }

  getCurrentUser() {

  }
}
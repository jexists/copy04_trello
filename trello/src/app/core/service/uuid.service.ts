import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';


@Injectable()
export class UUIDService {

    public static POSNO_UNIT = 10000;
    public static HTTP_TIME_OUT = 120000;
    public static SESSION_TIME_OUT = 1000 * 60 * 30;

    constructor() {
        // console.log();
        
        
    }

    public static generateUUID(): string {
        const uuid = UUID.UUID();

        for (let i=0; i<30; i++) {
            console.log(UUID.UUID());    
        }
        return uuid;

    }
}


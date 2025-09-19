import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private eventSource = new Subject<String>();

  event$ = this.eventSource.asObservable();

  emitEvent(msg:string){
    this.eventSource.next(msg);
  }
}

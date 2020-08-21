import { Component, OnDestroy } from '@angular/core';
import { observable, interval, Observable, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  private intervalSubs: Subscription;

  constructor() {

    this.intervalSubs = this.returnaIntervalo().subscribe(
      (value)=> console.log(value)
    );

  }

  returnaIntervalo() : Observable<Number>{

    const interval$ = interval(1000).pipe(
      take(10), map(q => q + 1), filter(q => (q % 2) === 0 ? true : false)
    );
    
    return interval$;

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}

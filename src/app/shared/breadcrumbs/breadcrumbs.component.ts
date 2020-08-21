import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, Data } from '@angular/router';
import { filter, take, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$ : Subscription;

  constructor(private router: Router) { 

    this.tituloSubs$ = this.getArgumentosRuta()
        .subscribe(({titulo}) => {
          this.titulo = titulo;
          document.title = `AdminPro - ${this.titulo}`;
    });
    
  }

  getArgumentosRuta() :  Observable<Data>{

    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd), 
      filter((event : ActivationEnd) => event.snapshot.firstChild == null),
      map((event : ActivationEnd) => event.snapshot.data));

  }

  ngOnDestroy(){

    this.tituloSubs$.unsubscribe();
    
  }

}

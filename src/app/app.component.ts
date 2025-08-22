import { Component, Directive, ElementRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })

// @Directive({
//   selector:'[temp]',
//   standalone:true
// })
// export class TempDirective {
//   private el = inject(ElementRef);
//   constructor(){
//     (this.el.nativeElement as HTMLElement).style.color = 'red';
//   }
// }

// @Directive({
//   selector:'[temp2]',
//   standalone:true
// })
// export class TempDirective2 {
//   private el = inject(ElementRef);
//   constructor(){
//     (this.el.nativeElement as HTMLElement).style.color = 'purple';
//   }
// }

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  imports: [HomeComponent,RouterModule]
})
export class AppComponent {
  title = 'myapp';
}


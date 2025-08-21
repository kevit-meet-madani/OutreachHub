import { Component, Directive, ElementRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'myapp';
}


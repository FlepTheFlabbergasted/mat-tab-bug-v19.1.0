import { trigger, transition, group, query, style, sequence, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('crossfade', [
      transition('one <=> two', [
        group([
          query(':enter', [
            style({ opacity: 0, position: 'absolute' }),
            sequence([
              animate('2000ms ease-in-out', style({ opacity: 1 })),
              style({ opacity: 1,  }),
            ]),
          ]),
          query(':leave', [
            sequence([
              style({ opacity: 1, position: 'absolute' }),
              animate('2000ms ease-in-out', style({ opacity: 0 })),
              style({ opacity: 0 }),
            ]),
          ]),
        ]),
      ]),
  ])]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}

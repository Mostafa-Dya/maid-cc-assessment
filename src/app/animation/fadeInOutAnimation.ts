import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeInOutAnimation = trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
    transition(':enter', [
      style({ opacity: 0 }),
      animate(300)
    ]),
    transition(':leave', [
      animate(300, style({ opacity: 0 }))
    ])
  ]);
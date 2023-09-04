import { animate, style, transition, trigger } from '@angular/animations';

export const SlideAndScaleAnimation = 
    trigger('ToggleCreate', [
      transition(':enter', [
        style({ 
          transform: 'translateX(-10%)',
          opacity: 0,
        }),
        animate('100ms ease-in')
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({ 
          opacity: 0,
          scale: 0.5,
        }))
      ]),
    ])
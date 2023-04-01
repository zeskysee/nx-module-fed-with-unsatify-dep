import { Component } from '@angular/core';
import { formatInTimeZone } from 'date-fns-tz';

@Component({
  selector: 'nx-module-fed-with-unsatify-dep-nx-welcome',
  template: `
    <div>{{dateString}}</div>
  `,
  styles: [],
})
export class NxWelcomeComponent {
  dateString = formatInTimeZone(new Date(), 'Asia/Kuala_Lumpur', 'dd/MM/yyyy');
}

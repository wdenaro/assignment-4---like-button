import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headingText = 'Exercise no.4 — Like Button';
  tweet = {
    body: 'Thanks guys! Great show, great energy and the perfect set list!! @SisterHazelBand @BullRun1740',
    likesCount: 10,
    isLiked: true
  };
}

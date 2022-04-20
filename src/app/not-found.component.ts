import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pbc-not-found',
  template: `
    <div
      class="absolute top-0 left-0 overflow-hidden h-screen w-screen flex justify-center content-center flex-wrap"
    >
      <p class="text-primary text-6xl">404</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

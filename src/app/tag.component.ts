import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pbc-tag',
  template: `
    <p>
      tag works!
    </p>
  `,
  styles: [
  ]
})
export class TagComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [TagComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':tagName', component: TagComponent }]),
    // BlogListItemModule,
    // AllBlogsBtnModule,
    // ThemeTogglerModule,
  ],
})
export class TagModule {}

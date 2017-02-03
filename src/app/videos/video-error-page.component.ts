import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-error-page',
  template: `
    <p>
      Please Log in to change content!
    </p>
  `,
  styles: []
})
export class VideoErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

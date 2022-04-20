import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { LocalSunlightService } from './shared/services/local-sunlight.service';

@Component({
  selector: 'pbs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(themeService: ThemeService, localSunlightService: LocalSunlightService) {
    themeService.load();
    localSunlightService.init();
  }
}

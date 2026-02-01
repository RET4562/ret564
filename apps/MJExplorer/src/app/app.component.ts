import { Component } from '@angular/core';
import { LoadGeneratedEntities } from 'mj_generatedentities';

LoadGeneratedEntities();

@Component({
  selector: 'app-root',
  template: '<mj-explorer-app></mj-explorer-app>'
})
export class AppComponent {}

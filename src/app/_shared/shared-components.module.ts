import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import {UserRoleSelectComponent} from './index';

@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    UserRoleSelectComponent,
  ],
  exports:[
    UserRoleSelectComponent
  ]
})

export class SharedComponentModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ExtraPagesRoutingModule } from './extra-pages-routing.module';

import { PageLoginComponent } from './login/login.component';
import { PageSignUpComponent } from './sign-up/sign-up.component';
import { PageForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Page404Component } from './404/404.component';
import { Page500Component } from './500/500.component';
import { PageConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { PageLockScreenComponent } from './lock-screen/lock-screen.component';
import { PageMaintenanceComponent } from './maintenance/maintenance.component';
 import { SharedComponentModule } from '../_shared/shared-components.module'

@NgModule({
  imports: [
    ExtraPagesRoutingModule,
    MaterialModule,
    FormsModule,
    SharedComponentModule,
  ],
  declarations: [
    PageLoginComponent,
    PageSignUpComponent,
    PageForgotPasswordComponent,
    Page404Component,
    Page500Component,
    PageConfirmEmailComponent,
    PageLockScreenComponent,
    PageMaintenanceComponent,
  ],
})

export class ExtraPagesModule {}

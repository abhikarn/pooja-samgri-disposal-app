import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { CreateRequestPage } from './create-request';

@IonicPage()
@NgModule({
  declarations: [
    CreateRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRequestPage),
  ],
  exports: [CreateRequestPage]
})
export class CreateRequestPageModule { }

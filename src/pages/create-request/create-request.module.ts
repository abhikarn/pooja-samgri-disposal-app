import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { CreateRequestPage } from './create-request';

@IonicPage()
=======
import { IonicPageModule } from 'ionic-angular';
import { CreateRequestPage } from './create-request';

>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
@NgModule({
  declarations: [
    CreateRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRequestPage),
  ],
<<<<<<< HEAD
  exports: [CreateRequestPage]
})
export class CreateRequestPageModule { }
=======
})
export class CreateRequestPageModule {}
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812

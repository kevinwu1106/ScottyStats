import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestProvider} from './test-provider';

@NgModule({
  declarations: [
    TestProvider,
  ],
  imports: [
    IonicPageModule.forChild(TestProvider),
  ],
  exports: [
    TestProvider
  ]
})
export class TestProviderModule {}

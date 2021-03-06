import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNativeDropdownComponent } from './native-dropdown.component';
import { FjNativeDropdownModule } from '@libs/freyja-ui/src/lib/native-dropdown/native-dropdown.module';
import { HighlightModule } from 'ngx-highlightjs';
import { ContentWrapModule } from '@freyjaDemo/app/components/content-wrap/content-wrap.module';

@NgModule({
  declarations: [DemoNativeDropdownComponent],
  imports: [
    CommonModule,
    FjNativeDropdownModule,
    HighlightModule.forRoot({theme: 'arduino-light'}),
    ContentWrapModule
  ]
})
export class NativeDropdownModule { }

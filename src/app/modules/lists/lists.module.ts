import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';



@NgModule({
  declarations: [
    BasicListComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    //export class (components, pipes, services ) what i want to shared
    BasicListComponent
  ]
})
export class ListsModule { }

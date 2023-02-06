import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './CDirective/custom.directive';

import { AppComponent } from './app.component';
import { TaskComponent } from './NeComponent/task/task.component';
import { Task2Component } from './NeComponent/task2/task2.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { StyleComponent } from './style/style.component';
import { TempformComponent } from './tempform/tempform.component';
import { TwowayComponent } from './twoway/twoway.component';
import { ChildComponent } from './child/child.component';
import { PerentComponent } from './perent/perent.component';
import { Child2Component } from './child2/child2.component';
import { Perent2Component } from './perent2/perent2.component';
import { Child3Component } from './child3/child3.component';
import { Perent3Component } from './perent3/perent3.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    Task2Component,
    DirectivesComponent,
    StyleComponent,
    TempformComponent,
    TwowayComponent,
    CustomDirective,
    ChildComponent,
    PerentComponent,
    Child2Component,
    Perent2Component,
    Child3Component,
    Perent3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

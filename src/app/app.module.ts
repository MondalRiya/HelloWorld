import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbProgressbar} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { TodoComponent } from './day2/todo/todo.component';
import { SortPipePipe } from './myPipes/sort-pipe.pipe';
import { TemplateformComponent } from './forms/template/templateform/templateform.component';
import { ModelformComponent } from './forms/template/modelform/modelform.component';
import { AutoSearchComponent } from './search/auto-search/auto-search.component';
import {searchFilterPipe } from './my-pipes/search-filter.pipe';
import { ConsumelocalserviceComponent } from './consume/consumelocalservice/consumelocalservice.component';
import { localserviceService } from './myservices/localservice.service';
import { Consumelocalservice2Component } from './consume/consumelocalservice2/consumelocalservice2.component';
import { ConsumeRemoteServiceComponent } from './consume/consume-remote-service/consume-remote-service.component';
import { RemoteserviceService } from './myservices/remoteservice.service';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { NuclearComponent } from './family/nuclear/nuclear.component';
import { InbuiltdirectiveComponent } from './directive/inbuiltdirective/inbuiltdirective.component';
import { SetbgDirective } from './customDirective/setbg.directive';
import { UseDirectiveComponent } from './customeDirective/use-directive/use-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    TodoComponent,
    SortPipePipe,
    TemplateformComponent,
    ModelformComponent,
    AutoSearchComponent,
    searchFilterPipe,
    ConsumelocalserviceComponent,
    Consumelocalservice2Component,
    ConsumeRemoteServiceComponent,
    NotfoundComponent,
    NuclearComponent,
    InbuiltdirectiveComponent,
    SetbgDirective,
    UseDirectiveComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      
      {
        path:'',
        redirectTo:'todo',
        pathMatch:'full'
      },
      {
        path:'nuclear',
        component:NuclearComponent,
        children:[
          
            {
              path:'father',
              component:FatherComponent
            },
            {
              path:'mother',
              component:MotherComponent
            },
            {
              path:'son',
              component:SonComponent
            },
            {
              path:'daughter',
              component:DaughterComponent
            },
           
            {
              path:'**',
              component:NotfoundComponent
            }
          
        ]
      },
      
      {
        path:'todo',
        component:TodoComponent
      },
      {
        path:'template',
        component:TemplateformComponent
      },
      {
        path:'model',
        component:ModelformComponent
      },
      {
        path:'search',
        component:AutoSearchComponent
      },
      {
        path:'localService',
        component:ConsumelocalserviceComponent
      },
      {
        path:'localService2',
        component:Consumelocalservice2Component
      },
      {
        path:'consumeremoteservice',
        component:ConsumeRemoteServiceComponent
      },
      {
        path:'directive',
        component:InbuiltdirectiveComponent
      },
      {
        path:'customDirective',
        component:UseDirectiveComponent
      },
      {
        path:'**',
        component:NotfoundComponent
      }
    ])
  ],
  providers: [localserviceService, RemoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

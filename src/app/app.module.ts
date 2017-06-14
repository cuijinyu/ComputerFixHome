import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { FindproblemsComponent } from './findproblems/findproblems.component';
import { MustComponent } from './must/must.component';
import { QuickComponent } from './quick/quick.component';
import { QuestionComponent } from './question/question.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TimeComponent } from './time/time.component';
import { QuestionAskComponent } from './question-ask/question-ask.component';
import { ProblemlistComponent } from './problemlist/problemlist.component';
import { ProblemComponent } from './problem/problem.component';
import { ProblemsolveComponent } from './problemsolve/problemsolve.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { ProblemcmsComponent } from './problemcms/problemcms.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { JoinComponent } from './join/join.component';
import {LoginGuard} from "./guard/login.guard";
import { DonateComponent } from './donate/donate.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    IntroductionComponent,
    KnowledgeComponent,
    FindproblemsComponent,
    MustComponent,
    QuickComponent,
    QuestionComponent,
    SideBarComponent,
    TimeComponent,
    QuestionAskComponent,
    ProblemlistComponent,
    ProblemComponent,
    ProblemsolveComponent,
    OrderlistComponent,
    ProblemcmsComponent,
    LoginComponent,
    MemberComponent,
    JoinComponent,
    DonateComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IntroductionComponent
      },
      {
        path:"order",
        component:OrderComponent
      },
      {
        path:"knowledge",
        component:KnowledgeComponent,
      children:[
        {
          path:"must",
          component:MustComponent
        },
        {
          path:"quick",
          component:QuickComponent
        }
      ]
      },
      {
        path:"find",
        component:FindproblemsComponent,
      },
      {
        path:"find/:id",
        component:FindproblemsComponent,
      },
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"orderlist",
        component:OrderlistComponent,
        canActivate:[LoginGuard]
      },
      {
        path:"problemcms",
        component:ProblemcmsComponent,
        canActivate:[LoginGuard]
      },
      {
        path:"member",
        component:MemberComponent
      },
      {
        path:"join",
        component:JoinComponent
      },
      {
        path:'donate',
        component:DonateComponent
      },
      {
        path:'aboutme',
        component:AboutmeComponent
      }
    ])
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

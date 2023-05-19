import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TopnavComponent } from './topnav/topnav.component';
const routes: Routes = [
  {
    component:TopnavComponent,
    path:'topnav'
  },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
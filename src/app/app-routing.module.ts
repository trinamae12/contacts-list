import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./contacts/contacts.module").then((m) => m.ContactsModule),
  },
  {
    path: 'test',
    loadChildren: () => import("./test/test.module").then((m) => m.TestModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogsComponentModule } from './components/dogs/dogs.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'dogs', component: DogsComponent }]),
    DogsComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule,MatCardModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule, 
     MatFormFieldModule
  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatCardModule, 
     MatFormFieldModule
  ]
})
export class MymaterialModule { }

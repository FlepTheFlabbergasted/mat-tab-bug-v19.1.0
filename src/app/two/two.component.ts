import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-two',
  imports: [RouterModule, MatButton],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent {

}

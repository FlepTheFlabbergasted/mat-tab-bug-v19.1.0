import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-two',
  imports: [MatTab, MatTabGroup, RouterModule, MatButton],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent {

}

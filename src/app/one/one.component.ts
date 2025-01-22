import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-one',
  imports: [MatTab, MatTabGroup, RouterModule, MatButton, NgTemplateOutlet],
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent {

}

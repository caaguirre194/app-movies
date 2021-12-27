import { Component, Input, OnInit } from '@angular/core';
import { ExitComponent } from '@components/exit/exit.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() class: string = '';
  @Input() isBack: boolean = false;
  @Input() isExit: boolean = false;

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}
}

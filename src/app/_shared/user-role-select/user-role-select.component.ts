import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/index'

@Component({
  selector: 'app-user-role-select',
  templateUrl: './user-role-select.component.html',
  styleUrls: ['./user-role-select.component.scss']
})
export class UserRoleSelectComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }
}

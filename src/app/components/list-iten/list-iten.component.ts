import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-iten',
  templateUrl: './list-iten.component.html',
  styleUrls: ['./list-iten.component.scss']
})
export class ListItenComponent implements OnInit {
  @Input() user: Object = {}
  constructor() { }

  ngOnInit() {
  }

}

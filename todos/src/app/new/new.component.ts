import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  constructor(private newService: TodosServiceService){}
              //  private route:ActivatedRoute) {}
  doneTodos;

 

  

  ngOnInit() {
    this.newService.takeTodos.subscribe(
      data => {
        this.doneTodos = data
      }
    )
}
}

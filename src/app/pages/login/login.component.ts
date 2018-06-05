import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, @Inject('Name') private testName: string  ) { }

  ngOnInit() {
    console.log(this.testName);
  }

  test() {
    this.apiService.get('api/application/').subscribe((data) => {
      console.log(data);
    })
  }

  Auth() {

  }
}

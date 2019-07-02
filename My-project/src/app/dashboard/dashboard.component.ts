import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdetailService } from '../services/userdetail.service';
import { UserDetailsConfig } from '../users.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userName:String;
  usersData : UserDetailsConfig[];
  constructor(private route: ActivatedRoute,
    private userDetailService: UserdetailService) {
   }

  ngOnInit() {
    this.userName= this.route.snapshot.params["name"] ;
    this.userDetailService.getUserDetails()
    .subscribe(data => this.usersData = data);
    }

}

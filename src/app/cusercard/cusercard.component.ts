import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-cusercard',
  templateUrl: './cusercard.component.html',
  styleUrls: ['./cusercard.component.css']
})
export class CusercardComponent implements OnInit {

  constructor(private route:ActivatedRoute, private us:UsersService){}

  cuser:any

  ngOnInit(): void {
      this.route.paramMap.subscribe(
        params=>{
          let userid:any=params.get('id');
          this.cuser=this.us.usersdata.find(
            u=>u.id==userid
          )
        }
      )
  }

}

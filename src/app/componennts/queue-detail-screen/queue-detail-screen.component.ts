import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { QueuemanagementService } from 'src/app/shared/queuemanagement.service';

@Component({
  selector: 'app-queue-detail-screen',
  templateUrl: './queue-detail-screen.component.html',
  styleUrls: ['./queue-detail-screen.component.css']
})
export class QueueDetailScreenComponent implements OnInit {

  displayNonePopUp = false
  QueueDetail:any
  NewQueueTime:any
  user:any
  isUpdateSituation = false
  newhourAndMinutesTime:any
  arryOfTime:any

  constructor(private queuemanagement:QueuemanagementService,private router:Router,private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.arryOfTime = this.queuemanagement.getArryOfTime()
    this.authenticationService.userSubject.subscribe(
      result => {
        this.user = result
      }
    )
    this.queuemanagement.GetQueueDetailSub$.subscribe(
      result => {
        this.displayNonePopUp = true
        this.QueueDetail = result
      }
    )
  }

  onClickHour(e:any){
    this.newhourAndMinutesTime = e.target.value
  }

  onDeleteItem(){
    this.queuemanagement.deleteItem(this.QueueDetail.id).subscribe(
      result => {
        this.displayNonePopUp = false
        window.location.reload()
      }
    )
  }

  onUpdateItem(){
    this.queuemanagement.updateItem(this.QueueDetail.id,this.NewQueueTime + 'T' + this.newhourAndMinutesTime).subscribe(
      result => {
        this.displayNonePopUp = false
        window.location.reload()
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { QueuemanagementService } from 'src/app/shared/queuemanagement.service';

@Component({
  selector: 'app-queue-list-screen',
  templateUrl: './queue-list-screen.component.html',
  styleUrls: ['./queue-list-screen.component.css']
})
export class QueueListScreenComponent implements OnInit {

  constructor(private queuemanagement:QueuemanagementService) { }
  isLoeaded = false
  que:any
  disending = false
  NewQueueTime:any
  displayNonePopUp = false
  arryOfTime:any
  newhourAndMinutesTime:any

  ngOnInit(): void {
    this.queuemanagement.getQue().subscribe(
      result => {
        this.isLoeaded = true
        this.que = result
         this.que.sort((a:any, b:any) => (a.name > b.name) ? 1 : -1)
      }
    )
    this.arryOfTime = this.queuemanagement.getArryOfTime()
  }

  onClickHour(e:any){
    this.newhourAndMinutesTime = e.target.value
  }
  onClickItem(item:any){
    this.queuemanagement.QueueDetails(item)
  }

  onSortArray(fieald:any){
    if(fieald == 'queueTime'){
      this.que.sort((a:any, b:any) => this.disending ? (new Date(a.queueTime) > new Date(b.queueTime)) ? 1 : -1 : (new Date(a.queueTime) > new Date(b.queueTime)) ? -1 : 1 )
    } 
    else {
      this.que.sort((a:any, b:any) => this.disending ? (a.name > b.name) ? 1 : -1 : (a.name > b.name) ? -1 : 1 )
    }
    this.disending = !this.disending
  }

  onAddItem(){
    this.queuemanagement.addItem(this.NewQueueTime + 'T' + this.newhourAndMinutesTime).subscribe(
      result => {
        this.displayNonePopUp = false
        window.location.reload()
      }
    )
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class QueuemanagementService {

  constructor(private http : HttpClient,private authenticationService:AuthenticationService) { }

  GetQueueDetailSub = new Subject<any>();
  GetQueueDetailSub$ = this.GetQueueDetailSub.asObservable()

  getQue(): Observable<Response> {
    return this.http.get<any>("https://localhost:44352/api/QueueManagement")
 }

 QueueDetails(item:any){
  this.GetQueueDetailSub.next(item)
 }

 deleteItem(id:any): Observable<any>{
   console.log(id)
   return this.http.delete('https://localhost:44352/api/QueueManagement/' + Number(id))
 }

  updateItem(id:any,NewQueueTime:any): Observable<any>{
    console.log(id)
    return this.http.patch('https://localhost:44352/api/QueueManagement',
    {
      "QueueId" : id,
      "NewQueueTime": NewQueueTime
    })
    
  }

  userId:any
  addItem(QueueTime:any): Observable<any>{
    this.authenticationService.userSubject.subscribe(
      result => {
        this.userId = result.userId
      }
    )
    return this.http.put('https://localhost:44352/api/QueueManagement',
    {
      "UserId" : this.userId,
      "QueueTime": QueueTime
    })
    
  }

  getArryOfTime(){
    let arryOfTime = []
    for(let i = 10; i <= 22;i++){
      arryOfTime.push(i + ':00')
      arryOfTime.push(i + ':15')
      arryOfTime.push(i + ':30')
      arryOfTime.push(i + ':45')
    }
    return arryOfTime
  }

}

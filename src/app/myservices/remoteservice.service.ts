import { Injectable } from '@angular/core'
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { UserInfo } from '../interface/user-info'

@Injectable({
  providedIn: 'root'
})
export class RemoteserviceService {

  constructor(private httpClient : HttpClient) { }
    userInfo
    getRemoteData():Observable<UserInfo[]>{
      return this.httpClient.get<UserInfo[]>('http://jsonplaceholder.typicode.com/users')
    }
  
}

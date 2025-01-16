import { Injectable } from '@angular/core';
import { DataService } from '../core/data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AzureTokenInputModel, TokenOuputModel } from 'src/app/models/AuthModel';
import { User } from 'src/app/models/UserModel';
import { PaginationModel, StatusModel } from 'src/app/models/shared/PaginationModel';
import { AddForwardUrl, UpdateForwardURL, urlForwarders } from 'src/app/models/UrlForwarder';
import { AddSoldPlanModel, ListPlanModel } from 'src/app/models/PlanModel';

@Injectable({
  providedIn: 'root'
})
export class SoldPlanClientService extends DataService<any> {

  constructor(http: HttpClient) {
    super("soldplans", http);
  }

  addSoldPlan(model: AddSoldPlanModel): Observable<StatusModel>
  {
    return this.post(model);
  }

}

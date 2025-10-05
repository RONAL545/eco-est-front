import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { RecyclingData, RecyclingSummary } from '../models/recycling.model';

@Injectable({
  providedIn: 'root'
})
export class RecyclingService {
  constructor(private apiService: ApiService) {}

  getAllRecyclingData(): Observable<RecyclingData[]> {
    return this.apiService.get<RecyclingData[]>('/residuos');
  }

  getRecyclingById(id: number): Observable<RecyclingData> {
    return this.apiService.get<RecyclingData>(`/residuos/${id}`);
  }

  createRecyclingData(data: Partial<RecyclingData>): Observable<RecyclingData> {
    return this.apiService.post<RecyclingData>('/residuos', data);
  }

  updateRecyclingData(id: number, data: Partial<RecyclingData>): Observable<RecyclingData> {
    return this.apiService.put<RecyclingData>(`/residuos/${id}`, data);
  }

  deleteRecyclingData(id: number): Observable<void> {
    return this.apiService.delete<void>(`/residuos/${id}`);
  }

  getRecyclingSummaryBySede(sedeId?: number): Observable<RecyclingSummary[]> {
    const endpoint = sedeId ? `/residuos/summary/sede/${sedeId}` : '/residuos/summary';
    return this.apiService.get<RecyclingSummary[]>(endpoint);
  }

  getRecyclingSummaryByPabellon(pabellonId: number): Observable<RecyclingSummary> {
    return this.apiService.get<RecyclingSummary>(`/residuos/summary/pabellon/${pabellonId}`);
  }
}

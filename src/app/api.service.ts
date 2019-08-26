import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Contact } from './contact';

const httOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api/contacts";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(apiUrl).pipe(
      tap(heroes => console.log('fetched contacts')),
      catchError(this.handleError('getContacts', []))
    )
  }

  getContact(id: number): Observable<Contact> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
      tap(_ => console.log(`fetched contact id = ${id}`)),
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }
}

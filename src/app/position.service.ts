import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Position } from './position';

@Injectable()
export class PositionService {

    private _url: string = 'https://tranquil-sea-40586.herokuapp.com/positions';

    constructor(private _http: Http) { }

    getAll(): Observable<Position[]> {
        return <Observable<Position[]>>this._http.get(this._url)
            .map((response: Response) => this._extractData(response));
    }

    getByDates(fromDate: number, toDate: number): Observable<Position[]> {
        return <Observable<Position[]>>this._http.get(`${this._url}/${fromDate}/${toDate}`)
            .map((response: Response) => this._extractData(response));
    }

    private _extractData<T>(response: Response): T {
        let body = response.json ? response.json() : null;
        return <T>(body || {});
    }
}
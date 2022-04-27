import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppSettings, defaults } from '../settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  get notify(): Observable<Record<string, any>> {
    return this.notify$.asObservable();
  }
  private options = defaults;
  private notify$ = new BehaviorSubject<Record<string, any>>({});

  getOptions() {
    console.log(this.options);
    return this.options;
  }

  setOptions(options: AppSettings) {
    console.log(options);
    this.options = Object.assign(defaults, options);
    this.notify$.next(this.options);
  }



  getLanguage() {
    return this.options.language;
  }

  setLanguage(lang: string) {
    this.options.language = lang;
    this.notify$.next({ lang });
  }
}

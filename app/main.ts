// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';

//noinspection TypeScriptCheckImport
import { Ng2DatetimePickerModule, DateTime } from 'ng2-datetime-picker';

export {
  DateTime
}

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, Ng2DatetimePickerModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);


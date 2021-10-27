import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { CardHighlightComponent } from './components/card-highlight/card-highlight.component';
import { InputMoneyComponent } from './components/input-money/input-money.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    ButtonComponent,
    HeaderComponent,
    CardHighlightComponent,
    InputMoneyComponent,
    InputDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

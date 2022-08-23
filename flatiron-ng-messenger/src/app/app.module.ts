import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BadgeComponent } from './badge/badge.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LabelComponent } from './label/label.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { ConversationControlComponent } from './conversation-control/conversation-control.component';
import { ConversationHistoryComponent } from './conversation-history/conversation-history.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SenderMessageComponent } from './sender-message/sender-message.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ConversationThreadComponent } from './conversation-thread/conversation-thread.component';
import { FormsModule } from '@angular/forms';
import { UserMessageComponent } from './user-message/user-message.component';
import { HeaderComponentComponent } from './header/header.component';
import { HighlightDirective } from './highlight.directive';
import { LoggingService } from './logging.service';
import { MessagingService } from './messaging.service';
import { HttpClientModule } from "@angular/common/http";
import { MessageCountComponent } from './message-count/message-count.component';



@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    BadgeComponent,
    CheckboxComponent,
    LabelComponent,
    InputboxComponent,
    ConversationControlComponent,
    ConversationHistoryComponent,
    ContactComponent,
    ContactListComponent,
    SenderMessageComponent,
    SendMessageComponent,
    ConversationThreadComponent,
    UserMessageComponent,
    HeaderComponentComponent,
    HighlightDirective,
    MessageCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggingService,MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

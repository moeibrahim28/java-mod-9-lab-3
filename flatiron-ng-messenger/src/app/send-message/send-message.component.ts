import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  messageString: string;

  constructor(private loggingSvce: LoggingService) {} // declare the loggingSvce variable through the component's constructor

  ngOnInit(): void {}

  onSendMessage() {
    this.loggingSvce.log("Send following message: ");
    this.loggingSvce.log(this.messageString);
}


}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel를 사용하기 위해 추가 강의에는 없음
import { ServerComponent } from "../server/server.component";
import { CommonModule } from '@angular/common'; // ngIf를 사용하기 위해 CommonModule를 추가 강의에는 없음

@Component({
  selector: '[app-servers]',
  // selector: '.app-servers',
  standalone: true,
  imports: [ServerComponent, FormsModule, CommonModule], 

  // imports: [ServerComponent], <app-server> 태그를 사용할 수 있게 함
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']  // styleUrl -> styleUrls로 수정
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created! Name is';
  serverName = 'Tesserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2']


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {} // void {}를 넣어야 작동함. 강의와는 다른 부분.

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

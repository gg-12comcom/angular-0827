import { Component } from '@angular/core';
import { ServerComponent } from "../server/server.component";

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent], 
  // imports: [ServerComponent], <app-server> 태그를 사용할 수 있게 함
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-server',
    standalone: true,
    imports: [CommonModule], // 여기에도 CommonModule을 추가
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }
// getColor는 CommonModule을 추가해야 import 해야만 한다
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
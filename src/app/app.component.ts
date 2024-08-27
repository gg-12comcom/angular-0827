import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';  // 변환된 standalone 컴포넌트

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServerComponent],  // standalone 컴포넌트를 직접 임포트
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'kim';
}

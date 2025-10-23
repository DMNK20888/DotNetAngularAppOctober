import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreService } from '../../core-module/core-service';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  constructor(private coreService: CoreService) { }

  getData(){
    console.log("Get Data button clicked")
    this.coreService.fetchDataTest().subscribe(data =>
    {
      console.log("Returned Data: ", data)
    }
    )
  }


}

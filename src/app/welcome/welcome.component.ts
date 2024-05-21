import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
  message= "Welcome to the Todo Application"
  name= ' '

  constructor (private route:ActivatedRoute){}

  ngOnInit(){
    console.log(this.message)
    this.name= this.route.snapshot.params['username']
  }
}

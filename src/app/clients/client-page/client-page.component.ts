import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
  providers: [ClientService]
})
export class ClientPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('Our passed ID is', id);

    this.clientService.log('Component has started');
  }

}

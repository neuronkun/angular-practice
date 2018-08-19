import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  name = '';

  serverId = 10;
  serverStatus = 'offline';
  serverCreated = false;

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  username = '';
  servers = [];

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
   }

  getServerStatus() {
    return this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus = Math.random() > 0.5 ? 'green' : 'red' ;
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event) {
  //   this.serverName = event.target.value;
  // }

  deleteUserName() {
    this.username = '';
  }

}

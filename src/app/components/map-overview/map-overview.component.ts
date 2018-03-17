import { Component, OnInit } from '@angular/core';
import L = require('leaflet');

@Component({
  selector: 'tap-map-overview',
  templateUrl: './map-overview.component.html',
  styleUrls: ['./map-overview.component.css']
})
export class MapOverviewComponent implements OnInit {
  options: any;
  optionsLoaded = false;

  constructor() {}

  ngOnInit() {

    // create map first then the options object
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '...'
        })
      ],
      zoom: 5,
      center: L.latLng([46.879966, -121.726909])
    };
    // this.pageLoaded = true;
  }
}

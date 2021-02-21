import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit {
  map: Leaflet.Map;
  propertyList = [];

  constructor() { }

  ngOnInit() {
    this.map = Leaflet.map('map').setView([43.068661, 141.350755], 8);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    Leaflet.marker([0, 0]).bindPopup('<b>Hello!!</b>').addTo(this.map);

    // antPolyline = L.polyline.antPath(latlngs, options);
    // antPolyline.addTo(map);
  
    antPath([[43.068661, 141.350755], [42.768651, 141.750955]], {color: '#FF0000', weight: 5, opacity: 0.6}).addTo(this.map);
    antPath([[43.668661, 140.250755], [42.368651, 141.150955]], {color: '#0000FF', weight: 5, opacity: 0.6, reverse: true,}).addTo(this.map);
  }

}

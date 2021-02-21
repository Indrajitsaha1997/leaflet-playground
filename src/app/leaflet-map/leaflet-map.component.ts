import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements OnInit {
  name = 'Angular';
  map:any;

  constructor() { }

  ngOnInit() {
    this.map = Leaflet.map('map').setView([20.5937, 78.9629], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Indrajit Saha'
    }).addTo(this.map);
    Leaflet.marker([0, 0]).bindPopup('<b>Hello!!</b>').addTo(this.map);

    // antPolyline = L.polyline.antPath(latlngs, options);
    // antPolyline.addTo(map);
  
    antPath([[22.9868, 87.8550], [25.0961, 85.3131]], {color: '#FF0000', weight: 5, opacity: 0.6, reverse: true}).addTo(this.map);
    // antPath([[43.668661, 140.250755], [42.368651, 141.150955]], {color: '#0000FF', weight: 5, opacity: 0.6, reverse: true,}).addTo(this.map);
  }

}

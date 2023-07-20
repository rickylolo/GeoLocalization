import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-local',
  templateUrl: './geo-local.component.html',
  styleUrls: ['./geo-local.component.css'],
})
export class GeoLocalComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 22.2736308,
    lng: 70.7512555,
  };
  zoom = 15;
  constructor() {}

  ngOnInit(): void {
    this.getLocation();
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          // Configuración del mapa
          this.center = {
            lat: this.latitude,
            lng: this.longitude,
          };
        },
        (error) => {
          console.error('Error al obtener la geolocalización:', error);
        }
      );
    } else {
      console.error('La geolocalización no está disponible en este navegador.');
    }
  }
}

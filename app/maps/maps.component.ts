import { Component, OnInit } from '@angular/core';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() {
      if (navigator && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition( pos => {
              const lng = parseFloat(pos.coords.longitude+"");
              const lat = parseFloat(pos.coords.latitude+"");

              let map: google.maps.Map;
              let service: google.maps.places.PlacesService;
              let infowindow: google.maps.InfoWindow;
              const myLocation = new google.maps.LatLng(lat, lng);

              infowindow = new google.maps.InfoWindow();

              map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                  center: myLocation,
                  zoom: 15,
              });

              const request = {
                  location: new google.maps.LatLng(lat, lng),
                  rankBy: google.maps.places.RankBy.DISTANCE,
                  keyword: 'Cancer hospital',
                  name: 'Cancer hospital',
                  language: 'en',
                  types: ["hospital"]
              };

              service = new google.maps.places.PlacesService(map);

              service.nearbySearch(
                  request,
                  (
                      results: google.maps.places.PlaceResult[] | null,
                      status: google.maps.places.PlacesServiceStatus
                  ) => {
                      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                          for (let i = 0; i < results.length; i++) {
                              this.createMarker(map, infowindow, results[i]);
                          }

                          map.setCenter(results[0].geometry!.location!);
                      }
                  }
              );
          });
      }
  }

  ngOnInit() {}

    createMarker(map, infowindow, place: google.maps.places.PlaceResult) {
        if (!place.geometry || !place.geometry.location) return;

        const marker = new google.maps.Marker({
            map,
            position: place.geometry.location,
        });

        google.maps.event.addListener(marker, "click", () => {
            infowindow.setContent(place.name || "");
            infowindow.open(map);
        });
    }

}

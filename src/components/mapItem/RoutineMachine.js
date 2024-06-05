import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import placeholder from "../../assets/images/placeholder.png";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(21.028511, 105.835144),
      L.latLng(21.072145, 105.818315),
    ],
    language: "en",
    lineOptions: {
      styles: [{ color: "green", weight: 4 }],
    },
    show: true,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: (i, wp) => {
      return L.marker(wp.latLng, {
        draggable: true,
        icon: L.icon({
          iconUrl: placeholder,
          iconSize: [60, 60],
        }),
      });
    },
    createGeocodingControl: (options) => {
      return L.Routing.Geocoder(options, {
        showUseMyLocationButton: false,
        position: "top-left",
        placeholder: "Enter destination",
      });
    },
    routeWhileDragging: (waypoints) => {
      return L.Routing.routeToMarkers(waypoints, {
        language: "en",
        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false,
      });
    },
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const Geolocation = ({ lat, long}) => {
  console.log(lat, long);
  const position = [lat, long];
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Marker position={position}>
            <Popup>Popup for Marker</Popup>
            <Tooltip>Tooltip for Marker</Tooltip>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Geolocation;

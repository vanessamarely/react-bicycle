import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";

const Geolocation = ({ lat, long}) => {
  console.log(lat, long);
  const position = [lat, long];
  return (
    <div className="flex flex-col">
      <div className="w-60 h-60 overflow-hidden">
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
          <Marker position={[6.230833, -75.590553]}>
            <Popup>Popup for Marker</Popup>
            <Tooltip>Tooltip for Marker</Tooltip>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Geolocation;

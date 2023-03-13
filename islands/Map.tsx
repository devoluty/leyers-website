import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";

const googleApi = "AIzaSyDNlb3bt_H1JjNyKmwNUXPSpP9sihRtkkc";

const Map = () => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({ lat: 19.03473107992709, lng: -98.19337609390695 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: false,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleApi as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p className="font-inter">Cargando mapa...</p>;
  }

  return (
    <>
      <div className="m-5 flex justify-center items-center">
        <h1 className="font-epilogue font-bold text-3xl p-5">Conócenos</h1>
      </div>
      <div className="relative justify-center items-center flex">
        <GoogleMap
          options={mapOptions}
          zoom={15}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: "940px", height: "490px" }}
          onLoad={() => console.log("Map Component Loaded...")}
        >
          <MarkerF
            position={mapCenter}
            onLoad={() => console.log("Marker Loaded")}
          />
        </GoogleMap>
      </div>
    </>
  );
};

export default Map;

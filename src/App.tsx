import { useEffect, useRef } from 'react';
import './styles.css';
import 'ol/ol.css';
import { Map } from 'ol';
import { map } from './map';
export function useMap() {
  const mapRef = useRef<Map>(map);
  if (!mapRef.current) {
    mapRef.current = map;
  }
  return mapRef.current;
}

export default function App() {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap();
  useEffect(() => {
    if (mapRef.current) {
      map.setTarget(mapRef.current);
      map.updateSize();
    }
  }, [map]);
  return (
    <div className="App">
      <h1>Open Layers React+TS Starter</h1>
      <div className="map-container">
        <div id="map" ref={mapRef}></div>
      </div>
    </div>
  );
}

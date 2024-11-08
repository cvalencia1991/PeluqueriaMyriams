'use client';

import { useEffect, useRef } from "react";
import { Loader } from '@googlemaps/js-api-loader';

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');
      const { AdvancedMarkerElement } = await loader.importLibrary('marker');

      const position = {
        lat: 3.4044908404027447,
        lng: -76.55055747831207
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'Peluqueria_Myriams'
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      new AdvancedMarkerElement({
        map,
        position: position,
        title: 'Peluqueria Myriams',
      });
    };

    initMap();
  }, []);

  return (
    <div className='h-[550px] p-5' ref={mapRef} />
  );
}


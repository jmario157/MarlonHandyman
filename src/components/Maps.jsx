import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';

const Maps = () => {
    const mapStyles = {
        height: "50vh",
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
    };

    const defaultCenter = {
        lat: 35.83291176337734,
        lng: -78.53961626135619
    };

    const [markerPosition, setMarkerPosition] = useState(defaultCenter);

    useEffect(() => {
        const storedPosition = localStorage.getItem('markerPosition');
        if (storedPosition) {
            setMarkerPosition(JSON.parse(storedPosition));
        }
    }, []);

    const options = {
        mapTypeId: 'roadmap',
        tilt: 45,
    };

    const handleMarkerDragEnd = (e) => {
        const newLat = e.latLng.lat();
        const newLng = e.latLng.lng();
        const newPosition = { lat: newLat, lng: newLng };
        setMarkerPosition(newPosition);

        // Guardar la nueva posición en el localStorage
        localStorage.setItem('markerPosition', JSON.stringify(newPosition));
    };

    const getDirections = () => {
        const { lat, lng } = markerPosition;
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        window.open(directionsUrl, '_blank');
    };

    return (
        <div className='containe-maps'>
            <h2 style={{ textAlign: 'center', color: 'red', marginBottom: '20px' }} className='title'>
                How to find us?
            </h2>
            <LoadScript googleMapsApiKey="AIzaSyBfOXhoUmYsSW8YH5g_0-CJhyuD13Gcb9s">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={16}
                    center={markerPosition}
                    options={options}
                >
                    <Marker
                        position={markerPosition}
                        draggable={true}
                        onDragEnd={handleMarkerDragEnd}
                    />
                </GoogleMap>
            </LoadScript>
            <div className="directions-button">
                <button className="get-directions-btn" onClick={getDirections}>
                    How to get there?
                </button>
            </div>
        </div>
    );
};

export default Maps;

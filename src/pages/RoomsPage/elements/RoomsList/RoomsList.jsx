import React from 'react';
import { useSelector } from 'react-redux';

import './RoomsList.scss';

import RoomsCard from '../RoomsCard/RoomsCard';

const RoomsList = () => {
    const roomsData = useSelector((state) => state.rooms.rooms);

    const renderItems = (arr) => {
        return arr.map((item) => {
            return <RoomsCard key={item.id} room={item} />;
        })
    }

    const elements = renderItems(roomsData)

    return (
        <section className="rooms-details">
            {elements}
        </section>
    );
};

export default RoomsList;

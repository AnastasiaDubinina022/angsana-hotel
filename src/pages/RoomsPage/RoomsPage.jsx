import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './RoomsPage.scss';

import PageBanner from '../../components/PageBanner/PageBanner';
import RoomsList from './elements/RoomsList/RoomsList';

import { fetchRooms } from '../../features/roomsSlice';

const RoomsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRooms());
    }, [])

    return (
        <main className="main">
            <div className="main-wrapper">
                <PageBanner page="rooms" title="Our rooms and rate" color="blue"/>
                <div className="container">
                    <RoomsList/>
                </div>
            </div>
        </main>
    )
}

export default RoomsPage;
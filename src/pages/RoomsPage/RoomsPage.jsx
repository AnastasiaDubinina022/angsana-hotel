import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import './RoomsPage.scss';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import PageBanner from '../../components/PageBanner/PageBanner';
import RoomsList from './elements/RoomsList/RoomsList';

import {fetchRooms} from '../../features/roomsSlice';

const RoomsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <PageWrapper>
      <main className="main">
        <div className="main-wrapper">
          <PageBanner
            page="rooms"
            title="Our rooms and rate"
            color="blue"
          />
          <div className="container">
            <RoomsList />
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default RoomsPage;

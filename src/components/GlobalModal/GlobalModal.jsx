import { useSelector, useDispatch } from 'react-redux';
import WarningModal from '../WarningModal/WarningModal';
import { closeModal } from './../../features/modalSlice';

const GlobalModal = () => {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state) => state.modal);

  return (
    <WarningModal isOpen={isOpen} onClose={() => dispatch(closeModal())}>
        {content ? content : 
            <>
                <p>This section is under development.</p> 
                <p>Please check back later.</p>
            </>}
    </WarningModal>
  );
};

export default GlobalModal;

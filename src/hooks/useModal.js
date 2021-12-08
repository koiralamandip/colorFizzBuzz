import {useState} from 'react';

export const useModal = () => {

    const [isVisible, setVisible] = useState(false);

    function open(){
        setVisible((isVisible) => true);
    }

    function close(){
        setVisible((isVisible) => false);
    }

    return {isVisible, open, close}
}
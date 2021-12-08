import React, {useMemo, useState, useContext, useEffect} from 'react';
import { ColorContext } from '../../App'; // Context that supplies colors state to components that need it.
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';

const Main = () => {

    //Custom Hook that returns the current visibility state and provides functions to open and close elements as per the visibility state. 
    const {isVisible, open, close} = useModal();

    // Get state and action dispatcher function from the Context
    const [colorState, dispatch] = useContext(ColorContext);
    
    // For the first render of this component, dispatch an action to change (or set) the background color of the button element 
    useEffect(
        () => {
            dispatch({type: 'COLOR_CHANGE'})
        }, []
    );

    // Toggling function that toggles visibility of the modal.
    // This function toggles the visibility of the model as well as dispatch an action to change button color
    const openAndChangeColor = () => {
        open();
        dispatch({
            type: 'COLOR_CHANGE',
        });
    }


    return (
        <>
            {/* QSN No. 3 ::: Shows a Modal to display FizzBuzz Result */}
            <Modal isVisible={isVisible} open={open} close={close}/>
            
            {/* QSN No. 2 Solution:::
                Displaying a 500X300 box at the center of screen and CSS @media query handles the 
                requirement of sizing when screen width < 600px
            */}
            <div className="center500300">
                <button className="runBtn" style={{backgroundColor: colorState.colors[colorState.colors.length - 1]}} onClick={openAndChangeColor}> Show Result (1 to 100 / FizzBuzz) </button>
                {/* QSN No 1 Solution::: The changed colors stored in the state and used/managed by Context, Reducers
                    is then displayed as Comma Separated String
                */}
                <div className="colorlist">
                    {
                        colorState.colors.map((colorData) => (
                            <font color={colorData}>{colorData},</font>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default Main;
import { useFizzBuzz } from '../../hooks/useFizzBuzz';
import "./Modal.css";

const Modal = (props) => {
    
    // Custom hook that returns numbers from 1 to 10 as an array,
    // where multiples of 3 become "Fizz", of 5 become "Buzz" and of both become "FizzBuzz"
    const fizzBuzzResult = useFizzBuzz();


    return (
        <>
            {/* Add "visible" to the classlist of modalWrapper if isVisible state is true. CSS for "visible" class handles the display */}
            <div className={`modalWrapper ${props.isVisible? "visible" : ""}`}>
                <div className="modal">
                    <button className="modal_controls" onClick={props.close}>Close Modal</button>
                    <div className="modal_content">
                        {
                        // For each number/"FizzBuzz" in the result array, wrap the content in <p> tag.
                        fizzBuzzResult.map((result) => (
                            <p>{result}</p>
                        ))
                        }
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Modal;
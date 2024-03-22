import { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_COUNT = 0;

const Counter = ({step}) => {

    const [count, setCount] = useState(INITIAL_COUNT);

    const handleIncr = () => {
        setCount(count => count + step);
    };

    const handleReset = () => {
        setCount(INITIAL_COUNT);
    }

    return (
        <>
            <p>Valeur : {count}</p>
            <button onClick={handleIncr}>+{step}</button>
            {count !== INITIAL_COUNT && (
                <button onClick={handleReset}>Reset</button>
            )}
        </>
    );
};

Counter.defaultProps = {
    step: 1
}

Counter.propTypes = {
    step: PropTypes.number
};

export default Counter;
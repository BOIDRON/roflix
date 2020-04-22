import React from 'react';
import FontAwesmoe from 'react-fontawesome';
import '../css/stars.css';

const Stars = props => {
    const renderStars1 = () => {
        return props.fakeArray1.map

            ((element, i) => {
                return (
                    <FontAwesmoe
                        key={i}
                        className='stars'
                        name="star"
                        size="3x"
                    />
                )
            })
    }
    const renderStars2 = () => {
        return props.fakeArray2.map((element, i) => {
            return (
                <FontAwesmoe
                    key={i}
                    className='stars'
                    name="star-o"
                    size="3x"
                />
            )
        })
    }
    return (
        <div className="stars">
            {renderStars1()}
            {renderStars2()}
        </div>
    )
}

export { Stars };
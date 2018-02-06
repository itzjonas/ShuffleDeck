import React, { Fragment } from 'react';


function shuffleIt() {
    const deckSize = document.getElementById('deckSize').value;

    if(deckSize % 2 !== 0) {
        // <div class="alert alert-danger" role="alert">
        //     Must be divisible by 2!
        // </div>
        document.getElementById('before').innerHTML = 'ERROR: Must be divisible by 2.';
        return;
    }

    let deck = [];
    let result = [];

    for(let i = 0; i < deckSize; i++) {
        deck.push(i);
    }

    document.getElementById('before').innerHTML = `[${deck}]`;

    let half = deck.length / 2;

    for (let i = 0; i < half; i++) {
        result.push(deck[i + half]);
        result.push(deck[i]);
    }

    document.getElementById('after').innerHTML = `[${result}]`;
}


export default function Shuffle() {
    return (
        <Fragment>
            <h1 className="display-1">Shuffle</h1>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Deck Size:</span>
                </div>
                <input type="text" id="deckSize" className="form-control" placeholder="10" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" onClick={shuffleIt}>Submit</button>
                </div>
            </div>
            <p className="lead">Before: <kbd id="before">?</kbd></p>
            <p className="lead">After: <kbd id="after">?</kbd></p>
        </Fragment>
    );
}

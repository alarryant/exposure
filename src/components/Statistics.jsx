import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

function Statistics(props) {
    return (
        <div>
            <Sparklines data={[5, 10, 5, 20, 5, 10, 5, 20]}>
                <SparklinesLine color="blue" />
            </Sparklines>
        </div>
    );
}

export default Statistics;
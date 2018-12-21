import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

function Statistics() {
    return (
        <div>
        <Sparklines data={[18, 9, 8, 14, 1, 3, 7, 2, 9]}>
            <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
            <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
        </Sparklines>
        </div>
    );
}

export default Statistics;
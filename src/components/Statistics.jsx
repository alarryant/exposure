import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Statistics extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Sparklines data={[5, 10, 5, 20, 5, 10, 5, 20]}>
                    <SparklinesLine color="blue" />
                </Sparklines>
            </div>
        );
    }
}

export default Statistics;
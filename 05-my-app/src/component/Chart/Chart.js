import React from 'react';
import './Chart.css';
import Chartbar from './Chartbar';
const Chart = (props) => {
    const datapointvalue = props.datapoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...datapointvalue);
    return (
        <div className='chart'>
            {props.datapoints.map((dataPoint) => (
                <Chartbar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};
export default Chart;
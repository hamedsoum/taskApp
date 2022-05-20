import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    console.log(props);
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totallMaximun = Math.max(...dataPointValues);
    console.log(totallMaximun);
    return <div className='chart'>
        {props.dataPoints.map((dataPoint) => 
        (<ChartBar
            key={dataPoint.label}
                value={dataPoint.value} 
                 maxValue={totallMaximun} 
                 label={dataPoint.label}
            />)
        )}
    </div>
}

export default Chart ;

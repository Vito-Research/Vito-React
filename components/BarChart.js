import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
  export default function BChart (props) {  
      return (
        <ResponsiveContainer width={props.containerWidth} height={props.containerHeight}>
          <BarChart data={props.chartData} width={props.width} height={props.height}>
          <Bar dataKey={props.key1} fill="#8884d8" />
            <XAxis dataKey={props.Xkey}/>
            <YAxis/>
            <Legend/>
          </BarChart>
        </ResponsiveContainer>
      );
    }


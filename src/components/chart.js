import React from 'react';
import _ from 'lodash';
import {Sparklines,SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default function(props){
  return (
    <Sparklines data={props.data}  height={120} width={180}>
      <SparklinesLine color={props.color}/>
      <SparklinesReferenceLine type='mean' />
      <div>{average(props.data)} {props.units}</div>
    </Sparklines>
  )
}
function average(nums) {
  const total = nums.reduce((prev,curr) => prev + curr);
  return (total/nums.length).toFixed(2);
}

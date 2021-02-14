/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import Styles, { Rating, ContainerAvgs, RatingAvg } from './Styles.js';
import RatingBar from './RatingBar.jsx'

const Ratings = (props) => {
  return (
    <div className={props.className} data-testid="ratingsTest">
      <ContainerAvgs>
<div>
          <Rating>
          <div>Cleanliness</div>
          <RatingAvg>
            <RatingBar rating={props.averages.avgCleanliness}></RatingBar>
            {props.averages.avgCleanliness}
            </RatingAvg>
            </Rating>

          <Rating>
          <div>Accuracy</div>
          <RatingBar rating={props.averages.avgAccuracy}></RatingBar>
            {props.averages.avgAccuracy}
            </Rating>

          <Rating>
          <div >Communication</div>
          <RatingBar rating={props.averages.avgCommunication}></RatingBar>
            {props.averages.avgCommunication}
            </Rating>
    </div>
    <div>
          <Rating>
          <div>Location</div>
          <RatingBar rating={props.averages.avgLocation}></RatingBar>
            {props.averages.avgLocation}
            </Rating>

          <Rating>
          <div>Check-in</div>
          <RatingBar rating={props.averages.avgCheckIn}></RatingBar>
            {props.averages.avgCheckIn}
            </Rating>

          <Rating>
          <div>Value</div>
          <RatingBar rating={props.averages.avgValue}></RatingBar>
            {props.averages.avgValue}
            </Rating>
    </div>
          </ContainerAvgs>
    </div>
  )
}

export default Ratings;
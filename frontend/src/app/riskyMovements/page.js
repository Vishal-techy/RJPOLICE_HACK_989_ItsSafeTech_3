"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NavBar from '../../../components/navBar/navBar'
import AlertCard from '../../../components/alertCard/alertCard';

import A from '../../../public/A.png'
import B from '../../../public/B.png'
import C from '../../../public/C.png'
import D from '../../../public/D.png'
import E from '../../../public/E.png'
import F from '../../../public/F.png'

function riskyMovements() {

  const [angles, setAngles] = useState({
    left_elbow_hip_angle: 0,
    right_elbow_hip_angle: 0,
    left_hip_ankle_angle: 0,
    right_hip_ankle_angle: 0,
    left_hip_knee_angle: 0,
    right_hip_knee_angle: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/angles');
        const data = await response.json();
        setAngles(data);
      } catch (error) {
        console.error('Error fetching angle data:', error);
      }
    };

    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);

  }, []);

  return (
    <div>
        <NavBar/>

        <div className="camFeedWrap">
            <div className="headingDiv">
              <div className="heading">Risky Movements Detection</div>
              <div className="subHeading">The risky movements will be detected in this section</div>
            </div>

            <div className="riskyMovCamWrap">
              <div className="riskyMovCamDiv">
                <div className="riskyMovCam">
                  <img className='riskyMovCamFeed' src="http://127.0.0.1:5000/risky_movements" alt="" />
                </div>    
              </div>
              
              <div className="riskyMovAlertsDiv">
                <AlertCard alert="A prisoner named Ravi trying to climb on wall"/>
                <AlertCard alert="Group are prisoners have weapons in their hand"/>
                <AlertCard alert="Two prisoners named Raman and one more (not detected) trying to climb on wall"/>
                
              </div>
            </div>
        </div>

        <div className='riskyMovMeasurements'>
                   <div className="measureCard">
                    <Image className='measuImg' src={A} alt=''/>
                    <p>A: {angles.left_elbow_hip_angle}</p>
                  </div>

                  <div className="measureCard">
                    <Image  className='measuImg' src={B} alt=''/>
                    <p>B: {angles.right_elbow_hip_angle}</p>
                  </div>

                  <div className="measureCard">
                    <Image  className='measuImg' src={C} alt=''/>
                    <p>C: {angles.left_hip_ankle_angle}</p>
                  </div>

                  <div className="measureCard">
                    <Image  className='measuImg' src={D} alt=''/>
                    <p>D: {angles.right_hip_ankle_angle}</p>
                  </div>

                  <div className="measureCard">
                    <Image  className='measuImg' src={E} alt=''/>
                    <p>E: {angles.left_hip_knee_angle}</p>
                  </div>

                  <div className="measureCard">
                    <Image  className='measuImg' src={F} alt=''/>
                    <p>A: {angles.right_hip_knee_angle}</p>
                  </div>
          </div>  
    </div>
  )
}

export default riskyMovements
import React from 'react'
import NavBar from '../../../components/navBar/navBar'

function faceRecognition() {
  return (
    <div>
        <NavBar/>

        <div className="camFeedWrap">
            <div className="headingDiv">
              <div className="heading">Risky Movements Detection</div>
              <div className="subHeading">The risky movements will be detected in this section</div>
            </div>

              <div className="faceRecogCamDiv">
                <div className="faceRecogCam">
                  <img className='faceRecogCamFeed' src="http://127.0.0.1:5000/face_recog" alt="" />
                </div>    
              </div>
        </div>        
    </div>
  )
}

export default faceRecognition
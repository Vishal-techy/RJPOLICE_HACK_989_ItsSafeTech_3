import React from 'react'
import Image from 'next/image'
import NavBar from '../../components/navBar/navBar'

import mp4Icon from '../../public/mp4Icon.png'

function page() {
  return (
    <div>
      <NavBar/>

      <div className="camFeedWrap">
        <div className="headingDiv">
          <div className="heading">Live CCTV Feed</div>
          <div className="subHeading">All the CCTV feeds will be shown here</div>
        </div>

        <div className="camFeedDiv">
          <div className="camFeedOuter">
            <img  className="camFeed" src="http://127.0.0.1:5000/video_feed"/>
            <p>Cam 1</p>
          </div>

          <div className="camFeedOuter">
            <img  className="camFeed" />
            <p>Cam 2</p>
          </div>

          <div className="camFeedOuter">
            <img className="camFeed" />
            <p>Cam 3</p>
          </div>

          <div className="camFeedOuter">
            <img  className="camFeed" />
            <p>Cam 4</p>
          </div>
        </div>
      </div>

      <div className="recordFeedWrap">
        <div className="headingDiv">
          <div className="heading">Recorded Footages</div>
          <div className="subHeading">Recorded footages will be shown here</div>
        </div>

        <div className="recordFeedDiv">
          <div className="recordFeedOuter">
            <Image className='mp4Icon' src={mp4Icon} />
            <p>19-12-2023-20-07-52</p>
          </div>

          <div className="recordFeedOuter">
            <Image className='mp4Icon' src={mp4Icon} />
            <p>19-12-2023-20-07-52</p>
          </div>

          <div className="recordFeedOuter">
            <Image className='mp4Icon' src={mp4Icon} />
            <p>19-12-2023-20-07-52</p>
          </div>

          <div className="recordFeedOuter">
            <Image className='mp4Icon' src={mp4Icon} />
            <p>19-12-2023-20-07-52</p>
          </div>

          <div className="recordFeedOuter">
            <Image className='mp4Icon' src={mp4Icon} />
            <p>19-12-2023-20-07-52</p>
          </div>

          <div className="recordFeedOuter">
            <Image className='mp4Icon' src={mp4Icon} />
            <p>19-12-2023-20-07-52</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default page
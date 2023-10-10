import React from 'react';
import s from"./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.content}>
        <div>
          <img
            src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
            alt=""
          />
        </div>
        <div> ava+ description</div>
        <div>
          My Posts
          <div>
            New Posts
          </div>
          <div className={s.posts}>
            <div className={s.item}>
              post 1
            </div>
            <div className={s.item}>
              post 2
            </div>
          </div>
        </div>

      </div>
  )
}
export default Profile
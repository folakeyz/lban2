import React from 'react'
import styles from './Profile.module.css';
function Profile() {
    return (
        <div className={styles.profile}>
          <div className={styles.profileDesc}>
          <h1><b>LOTUS BETA ANALYTICS NIG. LTD.</b></h1>
          <p>Lotus Beta Analytics (LBAN) is a company leading the revolutionary approach to Information Communication Technology (ICT)
               by redefining and reimagining strategic approach to solutions and services delivery. We are focused on the provision 
               of Information Technology Solutions and Services that are built on a world-class, secure, resilient infrastructure, delivered 
              according to global best practices in partnership with the world’s leading technology vendors</p> 
        </div> 
        <div className={styles.profileImg}>
              
              </div>  
        </div>
    )
}

export default Profile

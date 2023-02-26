import React from 'react'
import Layout from '../../Components/Layout/Layout'
import UserMenu from '../../Components/Layout/UserMenu'

const Profile = () => {
  return (
    <Layout title={"Dashboard - Your Profile"}>
    <div className="container-fluid mt-3 pt-3">
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Profile
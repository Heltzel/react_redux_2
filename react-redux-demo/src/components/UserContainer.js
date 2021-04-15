import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>UserList</h2>
      <div>
        {console.log(userData)}
        {userData &&
          userData.users &&
          userData.users.map((user) => {
            return <p key={user.id}>{user.name}</p>
          })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

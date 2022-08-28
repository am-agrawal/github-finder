import React from "react"
import UserResults from '../components/users/UserResults'
import UserSearch from "../components/users/UserSearch"

function Home() {
  return (
    <div>
      {/* <h1 className="text-6xl">Welcome</h1> */}
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home

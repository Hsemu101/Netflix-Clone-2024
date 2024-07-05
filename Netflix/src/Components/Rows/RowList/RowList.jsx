import React from 'react'
import Row from "../Row/Row"
import requests from '../../utils/requests'

function RowList() {
  return (
   <>
   <Row title = "Netflix Originals"
        fetch = {requests.fetchNetflixOriginals}
        BigCheck={true}
   />
   <Row title = "Action"
        fetch = {requests.fetchAction}
  />
     <Row title = "Adventure"
        fetch = {requests.fetchAdventure}   
  />

        <Row title = "Animation"
        fetch = {requests.fetchAnimation}   
  />
        <Row title = "Comedy"
        fetch = {requests.fetchComedy}   
  />

          <Row title = "Crime"
        fetch = {requests.fetchCrime}   
  />

          <Row title = "Documentary"
        fetch = {requests.fetchDocumentary}   
  />

        <Row title = "Drama"
        fetch = {requests.fetchDrama}   
  />

        <Row title = "Fantasy"
        fetch = {requests.fetchFantasy}   
  />
       <Row title = "Romance"
        fetch = {requests.fetchRomance}   
  />

        <Row title = "Horror"
        fetch = {requests.fetchHorror}   
  />
         <Row title = "ScientificFiction"
        fetch = {requests.fetchScientificFiction}   
  />
        <Row title = "History"
        fetch = {requests.fetchHistory}   
  />

   </>
  )
}

export default RowList
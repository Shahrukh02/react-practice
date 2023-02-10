import React from 'react'

const List = ({data}) => {
  return (
    <>
      <ul>
        {data.map((data)=>{
            return <li key={data.id}>{data.title}</li>
        })}
      </ul>
    </>
  )
}

export default List

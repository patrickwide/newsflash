import React, { useState } from 'react'

export default function Commenting() {
  const [data,setData] = useState("") 

  function handleComments(e){
    e.preventDefault()
  }

  return (
    <form className=" m-4" onSubmit={handleComments}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label className="sr-only">Your comment</label>
            <textarea id="comment" rows="6" value={data}   onChange={(e) =>  setData(e.target.value)}
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit" >Post Comment</button>  
    </form>
  )
}
import React, { useState } from "react";
import { useLoaderData } from "react-router";

const SingleRecipePage = () => {
  const recipe = useLoaderData();
  
  const {
      image,
      title,
      category,
      cuisineType,
      _id,
      ingredients,
      instructions,
      preparationTimeMin,
      likeCount
    } = recipe;
    const [like, setLike]=useState(likeCount || 0);
    // console.log(likeCount, typeof likeCount);
    const handleUpdate=(id, updatedLike)=>{
        const updateInfo={
            likeCount:updatedLike
        }
        console.log(updateInfo);
        fetch(`https://server-tasty-nest.vercel.app/recipes/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
        .then(res=>{
            if(!res.ok){
                throw new Error(`HTTP error, status ${res.status}`)
            }
            return res.json()})
        .then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log(`update fail, ${err.message}`)
        })
    }
  return (
    <div className="py-8">
      <div>
        <p className="text-sm text-teal-600 mb-4 font-medium text-right">Like Count: {like}</p>
      </div>
      <div className="bg-gray-200 border border-teal-600 rounded max-w-sm mx-auto flex flex-col justify-center p-5">
        <div className="w-full flex justify-center rounded-full border border-teal-600 mb-6">
          <img
            className=" rounded-full  p-1"
            src={image}
            alt={title}
          />
        </div>
        <h3 className="font-semibold text-teal-600">{title}</h3>
        <p className="text-sm">Category: {category}</p>
        <p className="text-sm ">Cuisine: {cuisineType}</p>
        <p className="text-sm mb-2">Preparation Time: {preparationTimeMin}</p>
        
        <div className="mb-5">
          <h3 className="font-semibold text-teal-600">Instructions: </h3>
          <p>{instructions}</p>
        </div>
        <div className="mb-4">
            <h3 className="font-semibold text-teal-600">Ingredients:</h3>
            {
                ingredients.map((ingre, i)=><p key={i} >{i+1}: {ingre}</p>)
            }
        </div>
        <button onClick={()=>{
            const updatedLike=like+1;
            setLike(updatedLike);
            handleUpdate(_id, updatedLike)
            }}
        className="btn">Like</button>
      </div>
    </div>
  );
};

export default SingleRecipePage;

import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AuthContext from "../contexts-providers/AuthContext";
import { toast } from "react-toastify";

const SingleRecipePage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const recipe = useLoaderData();
  const {user}=useContext(AuthContext);
  const userEmail=user.email || '';
  const {
      image,
      title,
      category,
      cuisineType,
      _id,
      ingredients,
      instructions,
      preparationTimeMin,
      likeCount,
      adderEmail
    } = recipe;
    const [like, setLike]=useState(likeCount || 0);
    // console.log(likeCount, userEmail, adderEmail);
    const handleUpdate=(id, updatedLike)=>{
        const updateInfo={
            likeCount:updatedLike
        }
        // console.log(updateInfo);
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
        .then(()=>{
            // console.log(data)
        }).catch(err=>{
            toast.error(`update fail, ${err.message}`)
        })
    }
  return (
    <div className="padding py-8 text-teal-600">
      <div>
        <p className="text-sm text-gray-900 mb-4 font-medium text-right">Like Count: {like}</p>
      </div>
      <div className="bg-gray-200 border border-teal-600 rounded max-w-lg mx-auto flex flex-col justify-center p-5">
        <div className="w-full flex justify-center mb-6">
          <img
            className="w-[80%] rounded-full border border-teal-600  p-2"
            src={image}
            alt={title}
          />
        </div>
        <h3 className="font-semibold text-teal-900">{title}</h3>
        <p className="text-sm">Category: {category}</p>
        <p className="text-sm ">Cuisine Type: {cuisineType}</p>
        <p className="text-sm mb-2">Preparation Time: {preparationTimeMin}</p>
        
        <div className="mb-5">
          <h3 className="font-semibold text-teal-900">Instructions: </h3>
          <p>{instructions}</p>
        </div>
        <div className="mb-4">
            <h3 className="font-semibold text-teal-900">Ingredients:</h3>
            {
                ingredients.map((ingre, i)=><p key={i} >{i+1}: {ingre}</p>)
            }
        </div>
        <button onClick={()=>{
          if(userEmail===adderEmail){
            return toast.warning('You added this recipe. You cannot like this recipe.')
          }
            const updatedLike=like+1;
            setLike(updatedLike);
            handleUpdate(_id, updatedLike)
            }}
        className="btn bg-teal-300 text-teal-900 hover:bg-teal-700 hover:text-white">Like</button>
      </div>
    </div>
  );
};

export default SingleRecipePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalForRecipe from './Modal';

const SingleRecipe = (props) => {
    
    const [singleRecipeDetails,setSingleRecipeDetails] = useState([]);
    const [isModalOpen,setModalOpen] = useState(false);
    
    useEffect(()=>{
       {props.selectedRecipe && fetchSinglerecipeData()} 
    }, [props.recipeClick])

    const fetchSinglerecipeData = () => {
        axios.post(
            `https://dd-staging-backend.tmls.dev/api/recipes/${props.selectedRecipe.slug}`,
            {},
            {headers : { Authorization : 'Token token="$2a$10$V/lbjvXo8S21cMdcpGVPS.QmBdCJoXdLO0WcJbaCLaI/lTzUkkfyG"' }} // token
          )
          .then(result => 
            
                setSingleRecipeDetails(result.data),
                setModalOpen(true)   
            )
          .catch(e => console.log(e))
    }

    console.log("singleRecipeDetails",singleRecipeDetails)

    const modalClose = () =>{
        setModalOpen(false);
        setSingleRecipeDetails([])
    }

    return(
        <>
            <ModalForRecipe
                singleRecipeDetails={singleRecipeDetails}
                isModalOpen={isModalOpen}
                modalClose={modalClose}
            />
        </>
    )
}

export default SingleRecipe;

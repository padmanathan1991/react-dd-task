import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import './modal.css';

const ModalForRecipe = (props) => {

    return (
      <>
        {props.singleRecipeDetails && <Modal open={props.isModalOpen} onClose={props.modalClose} className="recipe-detail-modal">
          <div className="single-recipe-detail-container">
            <figure>
                <img src={props.singleRecipeDetails && props.singleRecipeDetails.recipe && props.singleRecipeDetails.recipe.images && props.singleRecipeDetails.recipe.images.full_sm}/>
            </figure>
            <div className="single-recipe-details">
                <h1>{props.singleRecipeDetails && props.singleRecipeDetails.recipe && props.singleRecipeDetails.recipe.title}</h1>
                <p className="story">{props.singleRecipeDetails && props.singleRecipeDetails.recipe && props.singleRecipeDetails.recipe.story}</p>
                <div className="cooking-tip">
                  <div className="tip">tip</div>
                  <p>{props.singleRecipeDetails && props.singleRecipeDetails.recipe && props.singleRecipeDetails.recipe.katies_tip}</p>
                </div>
                <div className="cals-and-like">
                  <p className="likes">{props.singleRecipeDetails && props.singleRecipeDetails.recipe && props.singleRecipeDetails.recipe.favorite_count}</p>
                  <p className="calories">{props.singleRecipeDetails && props.singleRecipeDetails.recipe && props.singleRecipeDetails.recipe.calories} cals</p>
                </div>
            </div>
          </div>
          <div className="preparation-method-container">
             <h3>Method</h3>
            <div className="preparation-method">
              { props.singleRecipeDetails && 
                  props.singleRecipeDetails.recipe && 
                  props.singleRecipeDetails.recipe.method.map((method, i)=>{
                    return(
                      <div key={i}>
                        <div>
                          <p>{method.directions}</p>
                          <figure>
                            <img src={method.images && method.images.medium} />
                          </figure>
                        </div>
                      </div>
                    )
                  })
              }
            </div>
          </div>
          <div className="related-recipes-wrapper">
          <h3>Related Recipes</h3>
          <div className="related-recipes-container">
          { props.singleRecipeDetails && 
              props.singleRecipeDetails.related_recipes && 
              props.singleRecipeDetails.related_recipes.map((relatedRecipe, i)=>{
                return(
                  <div key={i}>
                    <div className="related-recipe">
                    <figure>
                      <img src={relatedRecipe.images && relatedRecipe.images.full_lg} />
                    </figure>
                    <h4>{relatedRecipe.slug}</h4>
                    </div>
                  </div>
                )
              })
          }
          </div>
          </div> 
                {/* <p className="cook-time">{props.singleRecipeDetails && props.singleRecipeDetails.recipe && props.singleRecipeDetails.recipe.variations[0] && props.singleRecipeDetails.recipe.variations.cook_time}</p> */}
        </Modal>}
      </>
    )
}

export default ModalForRecipe;
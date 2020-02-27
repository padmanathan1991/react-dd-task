import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './images/avatar.jpg';
import InfiniteScroll from 'react-infinite-scroller';
import { Dropdown } from 'semantic-ui-react';
import SingleRecipe from './SingleRecipe';

let value=0;

function App() {

  const filterCategory = [
    {text: 'Breakfast',value: 67},
    {text: 'Lunch',value: 14},
    {text: 'Dinner',value: 10},
    {text: 'snacks',value: 27},
    {text: 'Sides',value: 16},
    {text: 'Desserts',value: 26},
    {text: 'Baking',value: 577},
    {text: 'Condiments',value: 515},
    {text: 'Crock/Insta',value: 22},
    {text: 'Drinks',value: 115},
    {text: 'Pasta & Pizza',value: 578},
    {text: 'salads',value: 503},
    {text: 'Seafood',value: 579},
    {text: 'Soups',value: 476}
  ]


  const [recipe, setRecipe] = useState([]);
  const [foodTypeFilter,setFoodTypeFilter] = useState(filterCategory);
  const [selectedRecipe,setSelectedRecipe] = useState('');
  const [recipeValue,setRecipeValue] = useState(null);
  const [recipeClick,setRecipeClick] = useState(false);


  useEffect(() => {
       fetchRecipeApiData(0);
  }, [])

  const fetchRecipeApiData=(offSetValue,foodType)=> {
     fetch(`https://dd-staging-backend.tmls.dev/api/recipes?limit=20&offset=${offSetValue}${foodType?"&foodtype="+`${foodType}`:''}`)
      .then(res => res.json())
      .then(data => {
        setRecipe(prevState => {
          return [...prevState, ...data.recipes];
        })
        value = value+data.recipes.length;
      }
    )
  }

  const scrollToLoad = () => {
    fetchRecipeApiData(value,recipeValue);
  }

  const foodTypeFilterChange = (e,defaultValues) => {
    setRecipe([]);
    setRecipeValue(defaultValues.value)
    fetchRecipeApiData(0,defaultValues.value);
  }

  const getRecipeDetail = (recipeDetail) => {
    setSelectedRecipe(recipeDetail);
    setRecipeClick(!recipeClick);
  }

  return(
    <>
      <div className="header">
        <div className="container">
          <div className="header-content">
            <figure>
              <img src={logo} />
            </figure>
            <ul>
              <li>Home</li>
              <li>Recipes</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-filter">
        <div className="container">
            <h2>Most Popular Recipes</h2>
            <Dropdown
              text={recipeValue === null ? 'Select Food Type' : `${foodTypeFilter.filter(item => item.value === recipeValue)[0].text}`  } 
              // options={foodTypeFilter} 
              // onChange={foodTypeFilterChange}
              className="dropdown-filter"
            >
              <Dropdown.Menu>
              {foodTypeFilter.map(type => (
                <Dropdown.Item 
                  text={type.text} key={type.value}
                  onClick={(e) => foodTypeFilterChange(e, type)}  
                />
              ))}
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </div>
      <div className="section-recipes">
        <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            hasMore={recipe && (recipe.length > 1000) ?false:true}
            loadMore={scrollToLoad}
            useWindow={false}
            threshold={300}
        >
          <div className="container">
            <div className="recipes-container">
              {recipe && recipe.map((recipeDetail, i) => {
                return (
                  <div key={i}>
                    <div className="recipe-card" onClick={()=>getRecipeDetail(recipeDetail)} >
                      <figure>
                        <img src={recipeDetail.images.full_lg} />
                      </figure>
                      <h3>{recipeDetail.title}</h3>
                      <div className="time-and-cals">
                        <p className="likes">{recipeDetail.favorite_count}</p>
                        <p>{recipeDetail.calories} Cals</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>


      <SingleRecipe
        recipeClick={recipeClick}
        selectedRecipe={selectedRecipe}
      />
    </>
  )

}

export default App;
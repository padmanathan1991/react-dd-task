(this["webpackJsonptask-react"]=this["webpackJsonptask-react"]||[]).push([[0],{195:function(e,t,a){e.exports=a.p+"static/media/avatar.57ee2ba4.jpg"},228:function(e,t,a){e.exports=a(413)},233:function(e,t,a){},234:function(e,t,a){},255:function(e,t,a){},411:function(e,t,a){},413:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(43),i=a.n(c),s=(a(233),a(128)),r=a(29),o=(a(234),a(195)),m=a.n(o),u=a(196),p=a.n(u),d=a(422),g=a(197),E=a.n(g),v=a(420),f=(a(255),function(e){return n.a.createElement(n.a.Fragment,null,e.singleRecipeDetails&&n.a.createElement(v.a,{open:e.isModalOpen,onClose:e.modalClose,className:"recipe-detail-modal"},n.a.createElement("div",{className:"single-recipe-detail-container"},n.a.createElement("figure",null,n.a.createElement("img",{src:e.singleRecipeDetails&&e.singleRecipeDetails.recipe&&e.singleRecipeDetails.recipe.images&&e.singleRecipeDetails.recipe.images.full_sm})),n.a.createElement("div",{className:"single-recipe-details"},n.a.createElement("h1",null,e.singleRecipeDetails&&e.singleRecipeDetails.recipe&&e.singleRecipeDetails.recipe.title),n.a.createElement("p",{className:"story"},e.singleRecipeDetails&&e.singleRecipeDetails.recipe&&e.singleRecipeDetails.recipe.story),n.a.createElement("div",{className:"cooking-tip"},n.a.createElement("div",{className:"tip"},"tip"),n.a.createElement("p",null,e.singleRecipeDetails&&e.singleRecipeDetails.recipe&&e.singleRecipeDetails.recipe.katies_tip)),n.a.createElement("div",{className:"cals-and-like"},n.a.createElement("p",{className:"likes"},e.singleRecipeDetails&&e.singleRecipeDetails.recipe&&e.singleRecipeDetails.recipe.favorite_count),n.a.createElement("p",{className:"calories"},e.singleRecipeDetails&&e.singleRecipeDetails.recipe&&e.singleRecipeDetails.recipe.calories," cals")))),n.a.createElement("div",{className:"preparation-method-container"},n.a.createElement("h3",null,"Method"),n.a.createElement("div",{className:"preparation-method"},e.singleRecipeDetails&&e.singleRecipeDetails.recipe&&e.singleRecipeDetails.recipe.method.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",null,n.a.createElement("p",null,e.directions),n.a.createElement("figure",null,n.a.createElement("img",{src:e.images&&e.images.medium}))))})))),n.a.createElement("div",{className:"related-recipes-wrapper"},n.a.createElement("h3",null,"Related Recipes"),n.a.createElement("div",{className:"related-recipes-container"},e.singleRecipeDetails&&e.singleRecipeDetails.related_recipes&&e.singleRecipeDetails.related_recipes.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"related-recipe"},n.a.createElement("figure",null,n.a.createElement("img",{src:e.images&&e.images.full_lg})),n.a.createElement("h4",null,e.slug)))}))))))}),h=function(e){var t=Object(l.useState)([]),a=Object(r.a)(t,2),c=a[0],i=a[1],s=Object(l.useState)(!1),o=Object(r.a)(s,2),m=o[0],u=o[1];Object(l.useEffect)((function(){e.selectedRecipe&&p()}),[e.recipeClick]);var p=function(){E.a.post("https://dd-staging-backend.tmls.dev/api/recipes/".concat(e.selectedRecipe.slug),{},{headers:{Authorization:'Token token="$2a$10$V/lbjvXo8S21cMdcpGVPS.QmBdCJoXdLO0WcJbaCLaI/lTzUkkfyG"'}}).then((function(e){return i(e.data)}),u(!0)).catch((function(e){return console.log(e)}))};console.log("singleRecipeDetails",c);return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{singleRecipeDetails:c,isModalOpen:m,modalClose:function(){u(!1),i([])}}))},R=0;var D=function(){var e=Object(l.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(l.useState)([{text:"Breakfast",value:67},{text:"Lunch",value:14},{text:"Dinner",value:10},{text:"snacks",value:27},{text:"Sides",value:16},{text:"Desserts",value:26},{text:"Baking",value:577},{text:"Condiments",value:515},{text:"Crock/Insta",value:22},{text:"Drinks",value:115},{text:"Pasta & Pizza",value:578},{text:"salads",value:503},{text:"Seafood",value:579},{text:"Soups",value:476}]),o=Object(r.a)(i,2),u=o[0],g=(o[1],Object(l.useState)("")),E=Object(r.a)(g,2),v=E[0],f=E[1],D=Object(l.useState)(null),k=Object(r.a)(D,2),b=k[0],N=k[1],j=Object(l.useState)(!1),O=Object(r.a)(j,2),x=O[0],S=O[1];Object(l.useEffect)((function(){C(0)}),[]);var C=function(e,t){fetch("https://dd-staging-backend.tmls.dev/api/recipes?limit=20&offset=".concat(e).concat(t?"&foodtype="+"".concat(t):"")).then((function(e){return e.json()})).then((function(e){c((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.recipes))})),R+=e.recipes.length}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header-content"},n.a.createElement("figure",null,n.a.createElement("img",{src:m.a})),n.a.createElement("ul",null,n.a.createElement("li",null,"Home"),n.a.createElement("li",null,"Recipes"),n.a.createElement("li",null,"About Us"),n.a.createElement("li",null,"Contact Us"))))),n.a.createElement("div",{className:"section-filter"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Most Popular Recipes"),n.a.createElement(d.a,{text:null===b?"Select Food Type":"".concat(u.filter((function(e){return e.value===b}))[0].text),className:"dropdown-filter"},n.a.createElement(d.a.Menu,null,u.map((function(e){return n.a.createElement(d.a.Item,{text:e.text,key:e.value,onClick:function(t){return a=e,c([]),N(a.value),void C(0,a.value);var a}})})))))),n.a.createElement("div",{className:"section-recipes"},n.a.createElement(p.a,{initialLoad:!1,pageStart:0,hasMore:!(a&&a.length>1e3),loadMore:function(){C(R,b)},useWindow:!1,threshold:300},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"recipes-container"},a&&a.map((function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("div",{className:"recipe-card",onClick:function(){return function(e){f(e),S(!x)}(e)}},n.a.createElement("figure",null,n.a.createElement("img",{src:e.images.full_lg})),n.a.createElement("h3",null,e.title),n.a.createElement("div",{className:"time-and-cals"},n.a.createElement("p",{className:"likes"},e.favorite_count),n.a.createElement("p",null,e.calories," Cals"))))})))))),n.a.createElement(h,{recipeClick:x,selectedRecipe:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(411),a(412);i.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[228,1,2]]]);
//# sourceMappingURL=main.d4212f44.chunk.js.map
async function task3(){

const res = await fetch("https://dummyjson.com/recipes?limit=200");
const data = await res.json();
const recipes = data.recipes;

console.log(
  "Desserts:",
  recipes.filter(r=>r.mealType.includes("Dessert"))
);

console.log(
  "Reviews >30:",
  recipes
    .filter(r=>r.reviewCount>30)
    .map(r=>r.name)
);

console.log(
  "Cinnamon:",
  recipes.filter(r=>
    r.ingredients.includes("Cinnamon")
  )
);

console.log(
  "Lunch and Dinner:",
  recipes.filter(r=>
    r.mealType.includes("Lunch")
    &&
    r.mealType.includes("Dinner")
  )
);

console.log(
  "Mango Salsa Chicken:",
  recipes.find(r=>r.name==="Mango Salsa Chicken").ingredients
);

console.log(
  "Avg American calories:",
  recipes
    .filter(r=>r.cuisine==="American")
    .reduce((s,r,_,arr)=>s+r.caloriesPerServing/arr.length,0)
);

console.log(
  "Avg pasta time:",
  recipes
    .filter(r=>r.tags.includes("Pasta"))
    .reduce((s,r,_,arr)=>s+r.cookTimeMinutes/arr.length,0)
);

console.log(
  "Lowest reviews:",
  recipes.reduce((min,r)=>
    r.reviewCount<min.reviewCount?r:min
  )
);

}

task3();
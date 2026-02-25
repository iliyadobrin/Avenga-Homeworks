async function task4(){

const res = await fetch("https://dummyjson.com/carts?limit=200");
const data = await res.json();
const carts = data.carts;

console.log(
  "All titles:",
  carts.flatMap(c=>c.products.map(p=>p.title))
);

console.log(
  "Total quantity:",
  carts
    .flatMap(c=>c.products)
    .reduce((s,p)=>s+p.quantity,0)
);

console.log(
  "Cart >100k:",
  carts.some(c=>c.total>100000)
);

console.log(
  "Total revenue:",
  carts.reduce((s,c)=>s+c.discountedTotal,0)
);

console.log(
  "Highest cart:",
  carts.reduce((max,c)=>
    c.total>max.total?c:max
  )
);

console.log(
  "Discount >15:",
  carts.flatMap(c=>c.products)
  .filter(p=>p.discountPercentage>15)
);

console.log(
  "Highest quantity user:",
  carts.reduce((max,c)=>
    c.totalQuantity>max.totalQuantity?c:max
  ).userId
);

console.log(
  "Most expensive:",
  carts.flatMap(c=>c.products)
  .reduce((max,p)=>
    p.price>max.price?p:max
  )
);

console.log(
  "Avg discounted:",
  carts.reduce((s,c)=>s+c.discountedTotal,0)
  / carts.length
);

console.log(
  "Top 3 expensive:",
  carts.flatMap(c=>c.products)
  .sort((a,b)=>b.discountedPrice-a.discountedPrice)
  .slice(0,3)
);

}

task4();
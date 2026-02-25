async function task2() {

  const res = await fetch("https://dummyjson.com/products?limit=200");
  const data = await res.json();
  const products = data.products;

  console.log(
    "Laptops:",
    products
      .filter(p => p.category === "laptops" && p.stock > 0)
      .sort((a,b)=>b.price-a.price)
  );

  console.log(
    "First grocery:",
    products.find(p => p.category === "groceries")
  );

  console.log(
    "Samsung index:",
    products.findIndex(
      p =>
        p.brand === "Samsung" &&
        p.category === "smartphones"
    )
  );

  console.log(
    "Sony exists:",
    products.some(p => p.brand === "Sony")
  );

  const skincare = products
    .filter(p=>p.category==="skincare")
    .sort((a,b)=>b.rating-a.rating);

  console.log(
    "Best skincare:",
    skincare.length ? skincare[0].title : "No skincare products"
  );

  console.log(
    "Avg discount >4.5:",
    products
      .filter(p=>p.rating>4.5)
      .reduce((s,p,_,arr)=>s+p.discountPercentage/arr.length,0)
  );

  console.log(
    "Highest price:",
    products.reduce((max,p)=>
      p.price>max.price?p:max
    )
  );

  console.log(
    "Avg iPhone:",
    products
      .filter(p=>p.title.includes("iPhone"))
      .reduce((s,p,_,arr)=>s+p.price/arr.length,0)
  );

  console.log(
    "Lowest price:",
    products.reduce((min,p)=>
      p.price<min.price?p:min
    )
  );

}

task2();
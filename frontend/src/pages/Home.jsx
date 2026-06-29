import Footer from "../components/Footer";
import Hero from "../components/Hero";

const products = [
{
name:"Zara Floral Maxi Dress",
price:"₹5,990",
image:"https://plus.unsplash.com/premium_photo-1673481601147-ee95199d3896?w=800&auto=format&fit=crop&q=60"
},
{
name:"New Balance 530 Women's",
price:"₹10,999",
image:"https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?w=800&auto=format&fit=crop&q=60"
},
{
name:"Gucci GG Sunglasses",
price:"₹32,000",
image:"https://images.unsplash.com/photo-1624796037770-c57cb79a567a?w=800&auto=format&fit=crop&q=60"
}
];

export default function Home(){

return(

<>

<Hero/>

<div className="container mt-5 text-center">

<h2 className="fw-bold display-5">
Welcome to Fashion Hub
</h2>

<p className="text-muted fs-5">
Discover premium fashion, luxury accessories and timeless styles curated just for you.
</p>

<div className="alert alert-warning shadow mt-4">
🎉 Flat 30% OFF on New Arrivals | 🚚 Free Shipping on Orders Above ₹2,999
</div>

</div>

<div className="container mt-5">

<div className="mb-5">

<h2 className="fw-bold text-center">
🌟 Featured Collection
</h2>

<p className="text-secondary text-center">
Upgrade your wardrobe with our latest premium fashion collections.
</p>

</div>

<div className="row mb-5">

<div className="col text-center">

<button className="btn btn-dark me-2">
All
</button>

<button
className="btn btn-outline-dark me-2"
onClick={()=>
window.scrollTo({
top:700,
behavior:"smooth"
})
}
>
Dresses
</button>

<button
className="btn btn-outline-dark me-2"
onClick={()=>
window.scrollTo({
top:900,
behavior:"smooth"
})
}
>
Shoes
</button>

<button
className="btn btn-outline-dark"
onClick={()=>
window.scrollTo({
top:1100,
behavior:"smooth"
})
}
>
Accessories
</button>

</div>

</div>

<div className="row">
{

products.map((product,index)=>(

<div
key={index}
className="col-md-4 mb-4"
>

<div
className="card shadow-lg h-100 border-0"
style={{
borderRadius:"18px",
transition:"0.3s"
}}
>

<img
src={product.image}
height="280"
className="card-img-top"
style={{
objectFit:"cover",
borderTopLeftRadius:"18px",
borderTopRightRadius:"18px"
}}
/>

<div className="card-body text-center">

<h4 className="fw-bold">
 {product.name}
</h4>

<span className="badge bg-danger mb-2">
New Arrival
</span>

<div className="mb-2">
⭐⭐⭐⭐⭐ (4.9)
</div>

<p className="text-muted">
Premium Quality • Limited Edition
</p>

<h5 className="text-success fw-bold mb-3">
{product.price}
</h5>

<a
href="/products"
className="btn btn-dark shadow w-100 fw-bold"
>
Shop Now
</a>

</div>

</div>

</div>

))

}

</div>

</div>

<Footer/>

</>

);

}
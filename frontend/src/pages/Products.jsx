const products = [


{id:1,name:"Zara Floral Maxi Dress",price:"₹5,990",image:"https://plus.unsplash.com/premium_photo-1673481601147-ee95199d3896?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWF4aSUyMGRyZXNzfGVufDB8fDB8fHww"},
{id:2,name:"H&M Oversized Hoodie",price:"₹2,299",image:"https://images.unsplash.com/photo-1759572095384-1a7e646d0d4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aCUyMGFuZCUyMG0lMjBvdmVyJTIwc2l6ZWQlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D"},
{id:3,name:"Adidas Essentials Women's Hoodie",price:"₹4,999",image:"https://images.unsplash.com/photo-1614231125961-38323d6c485b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
{id:4,name:"Nike Women's Sports T-Shirt",price:"₹2,495",image:"https://images.unsplash.com/photo-1560750976-125913e9f892?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"},
{id:5,name:"Levi's Women's High-Rise Jeans",price:"₹3,999",image:"https://images.unsplash.com/photo-1779816046822-3c08839e8e69?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxldmlzJTIwd29tZW5zJTIwaGlnaCUyMHJpc2UlMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D"},
{id:6,name:"Linen Shirt",price:"₹2,990",image:"https://images.unsplash.com/photo-1713881676551-b16f22ce4719?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{id:7,name:"Mango Satin Blazer",price:"₹6,990",image:"https://media.istockphoto.com/id/1367180724/photo/stylish-young-women-in-pastel-outfits-standing-together-fashion-concept-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=7RM9xUW4nB8V19NAQ3SlFnpVHyx0plwd-Btl_68McSk="},
{id:8,name:"Forever New Midi Dress",price:"₹7,999",image:"https://images.unsplash.com/photo-1768982597008-1085842f297a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1pZGklMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D"},
{id:9,name:"Nike Air Max 270 (Pink)",price:"₹12,995",image:"https://images.unsplash.com/photo-1603036050855-0d77c10e1eb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZSUyMGFpciUyMG1heCUyMHBpbmt8ZW58MHx8MHx8fDA%3D"},
{id:10,name:"Adidas Ultraboost Women's",price:"₹15,999",image:"https://images.unsplash.com/photo-1699999233448-fc2e192a4334?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"},
{id:11,name:"Puma Cali Dream Sneakers",price:"₹8,999",image:"https://images.unsplash.com/photo-1572293211676-a1ea92e6bf99?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{id:12,name:"Converse Chuck Taylor All Star",price:"₹5,999",image:"https://images.unsplash.com/photo-1601879213966-6d444019efe2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{id:13,name:"New Balance 530 Women's",price:"₹10,999",image:"https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwYmFsYW5jZSUyMHdvbWVucyUyMHNob2VkfGVufDB8fDB8fHww"},
{id:14,name:"Steve Madden High Heels",price:"₹6,999",image:"https://plus.unsplash.com/premium_photo-1671806266905-87fb9402929e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},
{id:15,name:"Michael Kors Jet Set Tote Bag",price:"₹22,999",image:"https://images.unsplash.com/photo-1713425884499-743f5372a65e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8"},
{id:16,name:"Coach Willow Shoulder Bag",price:"₹34,999",image:"https://images.unsplash.com/photo-1645276241987-7a7c14bf88f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29hY2glMjBiYWd8ZW58MHx8MHx8fDA%3D"},
{id:17,name:"Kate Spade Crossbody Bag",price:"₹18,999",image:"https://images.unsplash.com/photo-1760297553281-48313d0ade75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2F0ZSUyMHNwYWRlJTIwYmFnfGVufDB8fDB8fHww"},
{id:18,name:"Puma Women's Backpack",price:"₹2,999",image:"https://plus.unsplash.com/premium_photo-1671028547420-a541b5a1243e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVtYSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D"},
{id:19,name:"Apple Watch Series 10",price:"₹46,900",image:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaCUyMHNlcmllcyUyMDEwfGVufDB8fDB8fHww"},
{id:20,name:"Fossil Carlie Leather Watch",price:"₹12,995",image:"https://images.unsplash.com/photo-1633869699811-cd4f63049b36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9zc2lsJTIwbGVhdGhlciUyMHdhdGNofGVufDB8fDB8fHww"},
{id:21,name:"Pandora Charm Bracelet",price:"₹8,999",image:"https://images.unsplash.com/photo-1778000000743-87e855360c51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXJtJTIwYnJhY2xldHxlbnwwfHwwfHx8MA%3D%3D"},
{id:22,name:"Swarovski Crystal Necklace",price:"₹14,999",image:"https://images.unsplash.com/photo-1585506172580-9564a524231f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{id:23,name:"Oura Ring 4",price:"₹39,999",image:"https://images.unsplash.com/photo-1651752090085-50375d90bf8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3VyYSUyMHJpbmd8ZW58MHx8MHx8fDA%3D"},
{id:24,name:"Ray-Ban Erika Sunglasses",price:"₹9,999",image:"https://images.unsplash.com/photo-1556306535-38febf6782e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmF5JTIwYmFuJTIwc3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"},
{id:25,name:"Gucci GG Sunglasses",price:"₹32,000",image:"https://images.unsplash.com/photo-1624796037770-c57cb79a567a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VjY2klMjBnZyUyMHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D"},
{id:26,name:"Bvlgari Serpenti Sunglasses",price:"₹42,000",image:"https://images.unsplash.com/photo-1600025109398-07b69e2bf7f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VuZ2xhc3NlcyUyMHdpdGglMjBwb3VjaHxlbnwwfHwwfHx8MA%3D%3D"},
{id:27,name:"Michael Kors Leather Wallet",price:"₹8,999",image:"https://images.unsplash.com/photo-1639256853919-950a673b1fbc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{id:28,name:"Airwrap Multi-Styler",price:"₹49,900",image:"https://images.unsplash.com/photo-1577716595717-f4c363695556?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"},
{id:29,name:"Supersonic Hair Dryer",price:"₹39,900",image:"https://images.unsplash.com/photo-1620331317984-53581633aff6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{id:30,name:"Apple AirPods Pro (2nd Generation)",price:"₹24,900",image:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D"}

];

export default function Products(){

return(

<div className="container mt-5">

<h1
className="
fw-center
mb-5
"
>

Explore Our Collecction

</h1>

<div className="row">

{

products.map(

(product)=>(

<div
key={product.id}
className="
col-md-4
mb-4
"
>

<div
className="
card
shadow
border-0
h-100
"
style={{
borderRadius:"18px",
transition:"0.3s"
}}
>

<img

src={product.image}

height="260"

style={{

objectFit:"cover"

}}

className="card-img-top"

/>

<div
className="
card-body
text-center
"
>

<h4> 
    
{product.name}
<span className="badge bg-success ms-2">
    Best Seller
</span>
</h4>

<h5
className="
text-success
fw-bold
"
>

{product.price}

</h5>

<button
className="
btn
btn-dark
w-100
"

onClick={() => {

alert(
`${product.name} added to cart`
);

}}

>

Add To Cart

</button>

</div>

</div>

</div>

)

)

}

</div>

</div>

);

}
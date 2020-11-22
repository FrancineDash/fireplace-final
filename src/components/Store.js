import React from 'react';

import fire from "../Fire";
function Store(){

    const [products, setProducts]=React.useState([]);
    const db = fire.firestore();

    React.useEffect(()=>{
        let newItems = [];
        db.collection("products").get().then(function(snapshot){
            snapshot.forEach(function(doc){

                const object = doc.data();

                let item ={
                    image:object.image,
                    name: object.name,
                    price:object.price,
                    stock:object.stock,
                    id:doc.id
                };

                newItems.push(item);

            });

            setProducts(newItems);

        });

    },[db]);


    const productEles = products.map((product, idx)=>

        <div onClick={() => alert(product.name + "\n$ " + product.price + "\nStock: " + product.stock)} style={{border: ".5px dotted grey", width: '500px', marginBottom: "60px", marginLeft: 'auto', marginRight: 'auto'}} key={idx}>

            <h1>{product.name}</h1>
            <h2>$ {product.price}</h2>
            <h4 className={product.stock <= 10 ? "lowStock" : "highStock"}>Stock: {product.stock}</h4>
            <img src={product.image} alt="Product" style={{height: "100px", width: "100px"}}/>
            {product.stock === 0 ? '' : <button>Add to Cart</button>}
        </div>
    );

    return(

        <div>
            <h2>Store</h2>
            <div>{productEles}</div>
        </div>
    )

}

export default Store;

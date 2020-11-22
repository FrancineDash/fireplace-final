import React from "react";

import fire from "../Fire";
function Admin(){

    const [products, setProducts]=React.useState([]);
    const [product , setProduct]=React.useState({

        image: "",
        name:"",
        price:"",
        stock:"",
    });

    const [submit, setSubmit]=React.useState(false);
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

    },[db, submit]);



    const handleChange = prop => event =>{

        setProduct({
            ...product, [prop]: event.target.value
        });

    };

    const handleSubmit = ()=>{

        if(product.name.length > 2) {

            db.collection("products").add(product).then(() => {

                setProduct({

                    name: "",
                    price: "",
                    stock: "",
                });

                setSubmit(!submit);

            })

        }else{
            alert("Too few characters");
        }
    };

    const handleDelete = (id)=>{
        db.collection("products").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    };



    const productEles = products.map((product, idx)=>

        <div style={{border: ".5px dotted grey", width: '500px', marginBottom: "60px", marginLeft: 'auto', marginRight: 'auto'}} key={idx}>

            <h1>{product.name}</h1>
            <h2>$ {product.price}</h2>
            <h4 className={product.stock <= 10 ? "lowStock" : "highStock"}>Stock: {product.stock}</h4>
            <img src={product.image} alt="Product" style={{height: "100px", width: "100px"}}/>

            <button onClick={()=>handleDelete(product.id)}>Delete Product</button>

        </div>
    );


    return(

        <div><h2>Admin</h2>
            <input placeholder={"Enter URL"} onChange={handleChange("image")}/>
            <input type = "text" placeholder={"Name"} onChange={handleChange("name")}/>
            <input placeholder={"Price"} onChange={handleChange("price")}/>
            <input placeholder={"Stock"} onChange={handleChange("stock")}/>
            <button style = {{marginBottom: "60px"}} onClick={handleSubmit}>Submit</button>
            <div>{productEles}</div>

        </div>
    )

}

export default Admin;

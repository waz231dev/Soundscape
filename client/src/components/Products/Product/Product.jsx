import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    

console.log("data >>>",data);


    const navigate = useNavigate();


    const imageURL = process.env.REACT_APP_STRIPE_APP_DEV_URL + data?.img?.data[0].attributes.url

    // console.log("imageURL >>>",imageURL)
    // console.log("process >>>",process.env.REACT_APP_STRIPE_APP_DEV_URL)

    return (
      
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        imageURL
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data?.title}</span>
                <span className="price">&#8377;{data?.price}</span>
            </div>
        </div>
    );
};

export default Product;
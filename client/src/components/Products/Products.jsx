import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    // products?.data?.map((item)=>{
    //     console.log("item",item)
    // })
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {/* <Product key={products?.data[0]?.id} id={products?.data[0]?.id} data={products?.data[0]?.attributes} /> */}
                {products?.data?.map((item) => {
                    console.log("ata >>>",item)
                return <Product
                        key={item.id}
                        id={item.id}
                        data={item?.attributes}
                    /> }
                )}
            </div>
        </div>
    );
};

export default Products;
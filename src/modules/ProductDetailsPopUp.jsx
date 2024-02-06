import React from "react";




const ProductDetailsPopUp = (props) =>{
    let details = props.showDatas;
    return(
        <div style={{color:"#000000"}} key={details.id}>
            product details popup:{details.name}
            {details.description}
        </div>
    )
}
export default ProductDetailsPopUp;
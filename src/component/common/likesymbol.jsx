import React from 'react';
const LikeSymbol = (props) => {

    const{ liked, onClick } = props

    let classes = "likeSymbol fa fa-heart";
        if (!liked) classes += "-o"
        return   <span className= "btn">
                    <i className= {classes} onClick={onClick} />
                </span>
}
 
export default LikeSymbol;
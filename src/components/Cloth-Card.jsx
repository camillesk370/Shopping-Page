import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ClothCard(props) {
    const [mouseImg, setMouseImg] = useState(false);
    const [mouseBtn, setMouseBtn] = useState(false);
    const [iconClick, seticonClick] = useState(false);
    const [btnClick, setBtnClick] = useState(false);

    function handleMouseOverImg() {
        setMouseImg(true);
    }

    function handleMouseOutImg() {
        setMouseImg(false);
    }

    function handleMouseOverBtn() {
        setMouseBtn(true);
    }

    function handleMouseOutBtn() {
        setMouseBtn(false);
    }

    function handleIconClick() {
        seticonClick(prevValue => {
            return !prevValue;
        });
    }

    function handleBtnClick() {
        setBtnClick(prevValue => {
            return !prevValue;
        });
    }

    return (
        <div className="cloth-card">
          <div className="img-btn" onMouseOver={handleMouseOverImg} onMouseOut={handleMouseOutImg}>
            <img src={props.scr} alt="" style={{filter: mouseImg && "brightness(0.85)"}} /> 
            <div onMouseOver={handleMouseOverBtn} onMouseOut={handleMouseOutBtn}>
              <button 
              style={{backgroundColor: mouseBtn && "#FCECDD"}}
              onClick={handleBtnClick}
              >{btnClick ? "Have Added to Cart" : "Add to Cart"}</button>
            </div> 
          </div>
          <p className="cloth-name">{props.name}
          <FavoriteBorderIcon className="heart-icon" onClick={handleIconClick}/>
          {iconClick && <FavoriteIcon className="full-heart-icon" onClick={handleIconClick} />}
          </p>
        </div>
    )
}

export default ClothCard;
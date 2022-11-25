import { sliceTitleShort } from "../../../../utils/sliceTitleShort";
import { AiFillStar } from "react-icons/ai";
import "./index.css";
import { useEffect } from "react";
import { formatPrice } from "../../../../utils/priceFormat";

const Product = (props) => {
  const { info } = props;
  const {
    _id,
    title,
    thumbnails,
    rating_average,
    quantitySold,
    rootPrice,
    salePrice,
    discountRate,
    freeShip,
  } = info;
  useEffect(() => {}, []);
  return (
    <>
      <div className="product__item">
        <div className="thumbnail">
          <img
            src={thumbnails[0]}
            alt={title}
            className="max-w-[200px] max-h-[200px] object-cover"
          />
        </div>
        <div className="infos">
          <div className="product__name">
            {sliceTitleShort(title, 40)}
          </div>
          <div className="product__rates">
            {rating_average > 0 && (
              <>
                <span>{rating_average}</span>
                <span>
                  <AiFillStar
                    color="#FDD940"
                    size={"13px"}
                  />
                </span>
              </>
            )}

            {rating_average > 0 &&
              quantitySold > 0 && (
                <>
                  <span>|</span>
                  <span>
                    Đã bán {quantitySold}
                  </span>
                </>
              )}
          </div>
          <div className="product__price">
            {salePrice > 0 && (
              <span className="sale__price">
                {formatPrice(salePrice)}
              </span>
            )}
            {salePrice === 0 && (
              <span className="root__price">
                {formatPrice(rootPrice)}{" "}
              </span>
            )}
            {discountRate > 0 && (
              <span> -{discountRate}%</span>
            )}
          </div>

          {freeShip && (
            <div className="badge__ship">
              <span>Freeship+</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;

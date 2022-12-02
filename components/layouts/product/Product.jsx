import productImage from "../../../public/assets/img/product/product-2.jpg";

export default function Product() {
  return (
    <>
      <div class="col-lg-4 col-md-6">
        <div class="product__item">
          <div
            class="product__item__pic set-bg"
            data-setbg="img/shop/shop-1.jpg"
            style={{ backgroundImage: `url(${productImage.src})` }}
          >
            <div class="label new">New</div>
            <ul class="product__hover">
              <li>
                <a href="img/shop/shop-1.jpg" class="image-popup">
                  <span class="arrow_expand"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon_heart_alt"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon_bag_alt"></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="product__item__text">
            <h6>
              <a href="#">Furry hooded parka</a>
            </h6>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="product__price">$ 59.0</div>
          </div>
        </div>
      </div>
    </>
  );
}

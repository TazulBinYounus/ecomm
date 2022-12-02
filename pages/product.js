import Product from "../components/layouts/product/Product";
import Sidebar from "../components/layouts/product/SideBar";

export default function ProductPage() {
  return (
    <>
      <div class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__links">
                <a href="index.html">
                  <i class="fa fa-home"></i> Home
                </a>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="shop spad">
        <div class="container">
          <div class="row">
            <Sidebar />
            <div class="col-lg-9 col-md-9">
              <div class="row">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

                <div class="col-lg-12 text-center">
                  <div class="pagination__option">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

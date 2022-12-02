import Link from "next/link";

function Header() {
  return (
    <>
      <header class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-lg-2">
              <div class="header__logo">
                <Link href="/">
                  <img src="assets/img/logo.png" alt="" />
                </Link>
              </div>
            </div>

            <div class="col-xl-6 col-lg-7">
              <nav class="header__menu">
                <ul>
                  <li class="active">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/product">Product</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-3">
              <div class="header__right">
                <div class="header__right__auth">
                  <a href="#">Login</a>
                  <a href="#">Register</a>
                </div>
                <ul class="header__right__widget">
                  <li>
                    <span class="icon_search search-switch"></span>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon_heart_alt"></span>
                      <div class="tip">2</div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon_bag_alt"></span>
                      <div class="tip">2</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="canvas__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

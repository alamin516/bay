import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="header snipcss-gc916 sticky">
      <div className="d-flex d-lg-none">
        <div className="header--item__hamburger">
          <img
            src="data:image/svg+xml,%3Csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cline%20x1='3.75'%20y1='4.25'%20x2='22.25'%20y2='4.25'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'/%3E%3Cline%20x1='3.75'%20y1='12.25'%20x2='22.25'%20y2='12.25'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'/%3E%3Cline%20x1='3.75'%20y1='20.25'%20x2='22.25'%20y2='20.25'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'/%3E%3C/svg%3E"
            alt="Bar icon"
          />
        </div>
        <div className="header--icon header--icon__search hide-desktop">
          <button
            type="button"
            className="search__button search__button--trigger"
            aria-label="Search for products or categories"
          >
            <img
              src="data:image/svg+xml,%3Csvg%20className='icon%20icon--search'%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle%20cx='12.0208'%20cy='12.0208'%20r='7.75'%20transform='rotate(-45%2012.0208%2012.0208)'%20stroke='currentColor'%20stroke-width='1.5'/%3E%3Crect%20x='16.7938'%20y='17.8544'%20width='1.5'%20height='7'%20rx='0.75'%20transform='rotate(-45%2016.7938%2017.8544)'%20fill='currentColor'/%3E%3C/svg%3E"
              alt="search icon"
            />
          </button>
        </div>
      </div>
      <div className="header--item header--item__logo">
        <Link to="/">
          <span className="logo_svg_desktop">
            <img
              src="https://www.amarbay.com/assets/bay_logo-27C6p-D7.png"
              alt="Logo Desktop"
            />
          </span>
          <span className="logo_svg_mobile">
            <img
              src="https://www.amarbay.com/assets/bay_logo-27C6p-D7.png"
              alt="Logo Mobile"
            />
          </span>
        </Link>
      </div>
      <div className="header--item header--item__menu">
        <ul className="header--list-menu">
          <li>
            <a href="/product/categories?category=men dress-7685">MEN</a>
            <div className="header--submenu">
              <div className="header--submenu-container">
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=men dress-7685">
                    Dress Shoes
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=men casual-2448">
                    Casual Shoes
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=men summer-4159">
                    Sandals
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=sport mens-8457">
                    Sports Shoes
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=after sports">
                    Sports Sandals
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=men canvas-4359">
                    Canvas
                  </a>
                </div>
              </div>
              <div className="header--submenu--overlay"></div>
            </div>
          </li>
          <li>
            <a href="/product/categories?category=ladies closed-4648">WOMEN</a>
            <div className="header--submenu">
              <div className="header--submenu-container">
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=ladies closed-4648">
                    Closed
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=ladies open heel-7996">
                    Heels
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=ladies open flats-4019">
                    Flats
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=sport ladies-1733">
                    Sports Shoes
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=ladies canvas-4949">
                    Canvas
                  </a>
                </div>
              </div>
              <div className="header--submenu--overlay"></div>
            </div>
          </li>
          <li>
            <a href="/product/categories?category=children boy-2709">KIDS</a>
            <div className="header--submenu">
              <div className="header--submenu-container">
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=children boy-2709">
                    Boys Shoes
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=children boy-2709">
                    Boys Sandals
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=children girls-2479">
                    Girls Shoes
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=children girls-2479">
                    Girls Sandals
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=sports children-5453">
                    Sports
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=infant-6206">Infant</a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=junior-6433">Junior</a>
                </div>
              </div>
              <div className="header--submenu--overlay"></div>
            </div>
          </li>
          <li>
            <a href="/product/categories?category=bags-6877">ACCESSORIES</a>
            <div className="header--submenu">
              <div className="header--submenu-container">
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=shoe care-5038">
                    Shoe care
                  </a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=apparel">Apparels</a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=others-7053">Wallets</a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=belts-9042">Belts</a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=bags-6877">Bags</a>
                </div>
                <div className="header--submenu-links-column">
                  <a href="/product/categories?category=socks-4881">Socks</a>
                </div>
              </div>
              <div className="header--submenu--overlay"></div>
            </div>
          </li>
          <li>
            <a href="/scholarship">SCHOLARSHIP</a>
            <div className="header--submenu">
              <div className="header--submenu-container"></div>
              <div className="header--submenu--overlay"></div>
            </div>
          </li>
          <li>
            <a href="/product/categories?category=gift-voucher">VOUCHER</a>
            <div className="header--submenu">
              <div className="header--submenu-container"></div>
              <div className="header--submenu--overlay"></div>
            </div>
          </li>
        </ul>
      </div>
      <div className="header--item header--item__icons">
        <div className="header--icon header--icon__search d-none d-lg-block">
          <form
            action="/products"
            method="get"
            role="search"
            className="search"
          >
            <input
              className="search__input "
              type="search"
              name="search"
              placeholder="Search"
              value=""
            />
            <button
              type="submit"
              className="search__button"
              aria-label="Search for products or categories"
            >
              <img
                src="data:image/svg+xml,%3Csvg%20className='icon%20icon--search'%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle%20cx='12.0208'%20cy='12.0208'%20r='7.75'%20transform='rotate(-45%2012.0208%2012.0208)'%20stroke='currentColor'%20stroke-width='1.5'/%3E%3Crect%20x='16.7938'%20y='17.8544'%20width='1.5'%20height='7'%20rx='0.75'%20transform='rotate(-45%2016.7938%2017.8544)'%20fill='currentColor'/%3E%3C/svg%3E"
                alt="search icon"
              />
            </button>
          </form>
        </div>
        <div className="header--icon header--icon__account">
          <Link to="/login">
            <img
              src="data:image/svg+xml,%3Csvg%20 className='icon%20icon--acount'%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle%20cx='13'%20cy='8'%20r='4.25'%20stroke='currentColor'%20stroke-width='1.5'/%3E%3Cpath%20d='M21.2164%2022.25H4.78363C5.16255%2018.0451%208.69647%2014.75%2013%2014.75C17.3035%2014.75%2020.8374%2018.0451%2021.2164%2022.25Z'%20stroke='currentColor'%20stroke-width='1.5'/%3E%3C/svg%3E"
              alt="user icon"
            />
          </Link>
        </div>
        <div className="header--icon header--icon__bag">
          <span>
            <img
              src="data:image/svg+xml,%3Csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Crect%20x='3.75'%20y='7.74988'%20width='18.5'%20height='14.5'%20rx='1.25'%20stroke='currentColor'%20stroke-width='1.5'/%3E%3Cpath%20d='M8%206.99988L8%204.99988C8%203.89531%208.89543%202.99988%2010%202.99988L16%202.99988C17.1046%202.99988%2018%203.89531%2018%204.99988L18%206.99988'%20stroke='currentColor'%20stroke-width='1.5'/%3E%3C/svg%3E"
              alt="cart icon"
            />
            <span className="header--icon__bag-count">0</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

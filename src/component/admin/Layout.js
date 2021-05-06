import React, { Fragment,useEffect } from 'react'
import $ from 'jquery'
import {isAuth} from '../api/apiAuth'
import jwt from 'jsonwebtoken'
import {Link} from 'react-router-dom'
export const Layout = () => {
  useEffect(()=>{
    (function () {
      "use strict";
    
      var treeviewMenu = $('.app-menu');
    
      // Toggle Sidebar
      $('[data-toggle="sidebar"]').click(function(event) {
        event.preventDefault();
        $('.app').toggleClass('sidenav-toggled');
      });
    
      // Activate sidebar treeview toggle
      $("[data-toggle='treeview']").click(function(event) {
        event.preventDefault();
        if(!$(this).parent().hasClass('is-expanded')) {
          treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
        }
        $(this).parent().toggleClass('is-expanded');
      });
    
      // Set initial active toggle
      $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');
    
      //Activate bootstrip tooltips
      // $("[data-toggle='tooltip']").tooltip();
    
    })();
    
  })
    return(
        <Fragment>
            <header class="app-header">
      <a class="app-header__logo" href="index-2.html">Tatou</a>
      <a
        class="app-sidebar__toggle"
        href="#"
        data-toggle="sidebar"
        aria-label="Hide Sidebar"
      ></a>
      <ul class="app-nav">
        <li class="app-search">
          <input class="app-search__input" type="search" placeholder="Search" />
          <button class="app-search__button">
            <i class="fa fa-search"></i>
          </button>
        </li>
        <li class="dropdown">
          <a
            class="app-nav__item"
            href="#"
            data-toggle="dropdown"
            aria-label="Show notifications"
            ><i class="fa fa-bell-o fa-lg"></i
          ></a>
          <ul class="app-notification dropdown-menu dropdown-menu-right">
            <li class="app-notification__title">
              You have 4 new notifications.
            </li>
            <div class="app-notification__content">
              <li>
                <a class="app-notification__item" href="javascript:;"
                  ><span class="app-notification__icon"
                    ><span class="fa-stack fa-lg"
                      ><i class="fa fa-circle fa-stack-2x text-primary"></i
                      ><i
                        class="fa fa-envelope fa-stack-1x fa-inverse"
                      ></i></span
                  ></span>
                  <div>
                    <p class="app-notification__message">
                      Lisa sent you a mail
                    </p>
                    <p class="app-notification__meta">2 min ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="app-notification__item" href="javascript:;"
                  ><span class="app-notification__icon"
                    ><span class="fa-stack fa-lg"
                      ><i class="fa fa-circle fa-stack-2x text-danger"></i
                      ><i class="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span
                  ></span>
                  <div>
                    <p class="app-notification__message">
                      Mail server not working
                    </p>
                    <p class="app-notification__meta">5 min ago</p>
                  </div>
                </a>
              </li>

              <li>
                <a class="app-notification__item" href="javascript:;"
                  ><span class="app-notification__icon"
                    ><span class="fa-stack fa-lg"
                      ><i class="fa fa-circle fa-stack-2x text-success"></i
                      ><i class="fa fa-money fa-stack-1x fa-inverse"></i></span
                  ></span>
                  <div>
                    <p class="app-notification__message">
                      Transaction complete
                    </p>
                    <p class="app-notification__meta">2 days ago</p>
                  </div>
                </a>
              </li>
              <div class="app-notification__content">
                <li>
                  <a class="app-notification__item" href="javascript:;"
                    ><span class="app-notification__icon"
                      ><span class="fa-stack fa-lg"
                        ><i class="fa fa-circle fa-stack-2x text-primary"></i
                        ><i
                          class="fa fa-envelope fa-stack-1x fa-inverse"
                        ></i></span
                    ></span>
                    <div>
                      <p class="app-notification__message">
                        Lisa sent you a mail
                      </p>
                      <p class="app-notification__meta">2 min ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="app-notification__item" href="javascript:;"
                    ><span class="app-notification__icon"
                      ><span class="fa-stack fa-lg"
                        ><i class="fa fa-circle fa-stack-2x text-danger"></i
                        ><i
                          class="fa fa-hdd-o fa-stack-1x fa-inverse"
                        ></i></span
                    ></span>
                    <div>
                      <p class="app-notification__message">
                        Mail server not working
                      </p>
                      <p class="app-notification__meta">5 min ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="app-notification__item" href="javascript:;"
                    ><span class="app-notification__icon"
                      ><span class="fa-stack fa-lg"
                        ><i class="fa fa-circle fa-stack-2x text-success"></i
                        ><i
                          class="fa fa-money fa-stack-1x fa-inverse"
                        ></i></span
                    ></span>
                    <div>
                      <p class="app-notification__message">
                        Transaction complete
                      </p>
                      <p class="app-notification__meta">2 days ago</p>
                    </div>
                  </a>
                </li>
              </div>
            </div>
            <li class="app-notification__footer">
              <a href="#">See all notifications.</a>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a
            class="app-nav__item"
            href="#"
            data-toggle="dropdown"
            aria-label="Open Profile Menu"
            ><i class="fa fa-user fa-lg"></i
          ></a>
          <ul class="dropdown-menu settings-menu dropdown-menu-right">
            <li>
              <a class="dropdown-item" href="page-user.html"
                ><i class="fa fa-cog fa-lg"></i> Settings</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="page-user.html"
                ><i class="fa fa-user fa-lg"></i> Profile</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="page-login.html"
                ><i class="fa fa-sign-out fa-lg"></i> Logout</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </header>
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user">
        <div>
          <h2 class="ml-4 app-sidebar__user-name">{`${jwt.decode(isAuth()).first_name}  ${jwt.decode(isAuth()).last_name}`}</h2>
        </div>
      </div>
      <ul class="app-menu">
        <li>
          <Link class="app-menu__item" to="/admin/profil-user"
            ><i class="app-menu__icon fa fa-dashboard"></i
            ><span class="app-menu__label">Tableau de bord</span></Link
          >
        </li>
        {/*  */}
        <li>
          <Link to="/admin/ajouter-produit" class="app-menu__item"
            ><i class="app-menu__icon fa fa-pie-chart"></i
            ><span class="app-menu__label">Ajouter Produits</span></Link>
        </li>
        <li>
          <Link to="/admin/vos-commande" class="app-menu__item"
            ><i class="app-menu__icon fa fa-pie-chart"></i
            ><span class="app-menu__label">Gerer vos commandes</span></Link>
        </li>
        <li class="treeview">
          <Link class="app-menu__item" to="/admin/list-produits"
            ><i class="app-menu__icon fa fa-th-list"></i
            ><span class="app-menu__label">Listes produits</span
            ></Link>
        </li>
      </ul>
    </aside>
        </Fragment>
    )
}
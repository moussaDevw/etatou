import React, { Fragment,useEffect } from 'react'
import {isAuth} from '../api/apiAuth'
import $ from 'jquery'
import jwt from 'jsonwebtoken'
import {Link} from 'react-router-dom'
export const LayoutAdmin = () => {
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
        </li>
        <li class="dropdown">
          
        </li>
      </ul>
    </header>
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user">
        <div>
          <h2 class="ml-4 app-sidebar__user-name">{`${jwt.decode(isAuth()).first_name} ${jwt.decode(isAuth()).last_name}`}</h2>
        </div>
      </div>
      <ul class="app-menu">
        <li>
          <Link class="app-menu__item active" to="/admins/tableau-de-bord"
            ><i class="app-menu__icon fa fa-dashboard"></i
            ><span class="app-menu__label">Tableau de bord</span></Link
          >
        </li>
        <li class="treeview">
          <Link class="app-menu__item" to="/admins/ajouter-categorie"
            ><i class="app-menu__icon fa fa-laptop"></i
            ><span class="app-menu__label">Ajouter categorie</span></Link>
         </li> 
        <li>
          <Link to="/admins/Gerer-boutique" class="app-menu__item"
            ><i class="app-menu__icon fa fa-pie-chart"></i
            ><span class="app-menu__label">Gerer les Client</span></Link>
        </li>
        <li>
          <Link to="/admins/Ajouter-event" class="app-menu__item"
            ><i class="app-menu__icon fa fa-pie-chart"></i
            ><span class="app-menu__label">Ajouter un evenement</span></Link>
        </li>
        <li>
          <Link to="/admins/Gerer-evenement" class="app-menu__item"
            ><i class="app-menu__icon fa fa-pie-chart"></i
            ><span class="app-menu__label">Gerer les evenement</span></Link>
        </li>
        <li class="treeview">
          <a class="app-menu__item" href="#" data-toggle="treeview"
            ><i class="app-menu__icon fa fa-edit"></i
            ><span class="app-menu__label">List boutique(3)</span></a>
        </li>
        <li class="treeview">
          <a class="app-menu__item" href="#" data-toggle="treeview"
            ><i class="app-menu__icon fa fa-th-list"></i
            ><span class="app-menu__label">Liste Utilisateur</span
            ></a>
        </li>
      </ul>
    </aside>
        </Fragment>
    )
}
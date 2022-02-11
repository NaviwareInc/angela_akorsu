<template>
  <header id="header-sticky-wrapper" class=" header sticky-wrapper" style="height: 73.5px;">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="/">Angela Akorsu</a></h1>

      <nav class="nav-bar">
        <ul class="">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/profile" class="nav-link">Profile</router-link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
               data-toggle="dropdown" aria-expanded="false">
              Publications
            </a>

            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" to="/books">Books</router-link>
              <router-link class="dropdown-item" to="/reports">Research & Reports</router-link>
              <router-link class="dropdown-item" to="/articles">Articles</router-link>
<!--              <router-link class="dropdown-item" to="/research">Research</router-link>-->
            </div>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/associations">Associations</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/recognitions">Awards & Recognitions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gallery">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>

      <div class="header-social-links">
        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  background: rgba(21, 5, 23, 0.25);
  transition: all 0.5s;
  z-index: 997;
  padding: 15px 0;
  position: relative;
}

.header .logo {
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.header .header-social-links {
  padding-left: 20px;
}

.header .header-social-links a:hover {
  color: #ff7f5d;
}

.header .header-social-links a {
  color: #fff;
  padding-left: 6px;
  display: inline-block;
  line-height: 1px;
  transition: 0.3s;
}

.header .logo a, .header .header-social-links a {
  color: #fff;
  text-decoration: none;
}

.header .header-scrolled, .header .header-inner-pages {
  background: rgba(21, 5, 23, 0.85);
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-bar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-bar > ul {
  display: flex;
}

.nav-bar > ul > li {
  position: relative;
  white-space: nowrap;
  padding: 10px 12px;
}

.nav-bar a {
  display: block;
  position: relative;
  color: white;
  transition: 0.3s;
  font-size: 15px;
  font-weight: 600;
  padding: 0 3px;
  text-decoration: none;
}

.nav-bar > ul > li > a:before {
  content: "";
  position: absolute;
  height: 2px;
  bottom: -7px;
  left: 0;
  background-color: #ff7f5d;
  visibility: hidden;
  width: 0;
  transition: all 0.3s ease-in-out 0s;
}

.nav-bar a:hover:before,
.nav-bar li:hover > a:before {
  visibility: visible;
  width: 100%;
}

.nav-bar a:hover, .nav-bar .active > a, .nav-bar li:hover > a {
  color: #fff;
}

/*hide the dropdown*/
.nav-bar .dropdown .dropdown-menu {
  display: block;
  position: absolute;
  left: 12px;
  top: calc(100% + 30px);
  z-index: 1050;
  opacity: 0;
  visibility: hidden;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0 0 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}

.nav-bar .dropdown:hover > .dropdown-menu {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.nav-bar .dropdown .dropdown-menu a {
  padding: 5px 20px;
  font-size: 15px;
  font-weight: 500;
  text-transform: none;
  color: #2c3e50;
}

.nav-bar .dropdown-menu a:hover,
.nav-bar .dropdown-menu .active > a,
.nav-bar .dropdown-menu li:hover > a {
  color: #ff7f5d;
  background: inherit;
}

/*.nav-bar .dropdown-menu > a:after {*/
/*  content: "\eaa0";*/
/*  font-family: IcoFont;*/
/*  position: absolute;*/
/*  right: 15px;*/
/*}*/

@media (max-width: 1366px) {
  .nav-bar .dropdown .dropdown-menu ul {
    left: -90%;
  }

  .nav-bar .dropdown .dropdown-menu:hover > ul {
    left: -100%;
  }

  .nav-bar .dropdown .dropdown-menu > a:after {
    content: "\ea9d";
  }
}
</style>
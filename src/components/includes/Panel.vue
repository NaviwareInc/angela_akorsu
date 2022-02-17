<template>
  <section class="panel container py-5 text-start" data-aos="fade-up" data-aos-duration="1500">
    <div class="row">
      <div class="col-lg-3">
        <h3 class="mb-3">Dr. Angela Akorsu</h3>
        <ul class="list-unstyled">
          <li class="mb-2">
            Dr. Angela Dziedzom Akorsu is a Senior Research Fellow and the Head of Department at the
            <a class="intext-link" target="_blank" href="https://directory.ucc.edu.gh/d/department-of-labour-and-human-resource-studies">
              Department of Labour and Human Resource Studies
            </a>,
            School for Development Studies at the University of Cape Coast.
          </li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 offset-lg-1" data-aos="fade-up" data-aos-duration="1500">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><router-link to="/" class="gen-link">Home</router-link></li>
          <li class="mb-2"><router-link to="/profile" class="gen-link">Profile</router-link></li>
          <li class="mb-2"><router-link to="/associations" class="gen-link">Associations</router-link></li>
          <li class="mb-2"><router-link to="/recognitions" class="gen-link">Awards & Recognitions</router-link></li>
          <li class="mb-2"><a class="gen-link" href="/gallery">Gallery</a></li>
          <li class="mb-2"><router-link to="/contact" class="gen-link">Contact</router-link></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 offset-lg-1" data-aos="fade-up" data-aos-duration="1500">
        <h5>Publications</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><router-link to="/books" class="gen-link">Books</router-link></li>
          <li class="mb-2"><router-link to="/reports" class="gen-link">Research & Reports</router-link></li>
          <li class="mb-2"><router-link to="/articles" class="gen-link">Articles</router-link></li>
<!--          <li class="mb-2"><router-link to="/research" class="gen-link">Research & Reports</router-link></li>-->
        </ul>
      </div>

      <div class="col-6 col-lg-2 offset-lg-1 socials" data-aos="fade-up" data-aos-duration="1500">
        <h5>Let's Interact</h5>
        <ul class="list-unstyled">
          <li class="mb-2">
            <router-link to="" class="gen-link">
              <i class="icofont-linkedin"></i>
              @angelaakorsu
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="" class="gen-link">
              <i class="icofont-facebook"></i>
              @angelaakorsu
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="" class="gen-link">
              <i class="icofont-instagram"></i>
              @angelaakorsu
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="" class="gen-link">
              <i class="icofont-twitter"></i>
              @angelaakorsu
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Panel"
}
</script>

<style>
.panel .socials a:hover, .panel .socials a:focus {
  text-decoration: none;
}

.panel .socials i {
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  transition: 0.3s;
}
</style>
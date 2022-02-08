<template>
  <section class="panel container py-5">
    <div class="row">
      <div class="col-lg-3">
        <h3 class="mb-3">Dr. Angela Akorsu</h3>
        <ul class="list-unstyled">
          <li class="mb-2">
            Dr. Angela Dziedzom Akorsu is the Head of Department at the Department of Labour and Human Resource Studies
            (DOLAHRS) at the University of Cape Coast.
          </li>

          <li class="mb-2">
            Put something short here
          </li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 offset-lg-1">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="">Home</a></li>
          <li class="mb-2"><a href="">Profile</a></li>
          <li class="mb-2"><a href="">Associations</a></li>
          <li class="mb-2"><a href="">Awards & Recognitions</a></li>
          <li class="mb-2"><a href="">Gallery</a></li>
          <li class="mb-2"><a href="">Contact</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 offset-lg-1">
        <h5>Publications</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="">Books</a></li>
          <li class="mb-2"><a href="">Research</a></li>
          <li class="mb-2"><a href="">Articles</a></li>
          <li class="mb-2"><a href="">Reports</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 offset-lg-1 socials">
        <h5>Let's Interact</h5>
        <ul class="list-unstyled">
          <li class="mb-2">
            <a href="">
              <i class="icofont-linkedin"></i>
              @angelaakorsu
            </a>
          </li>
          <li class="mb-2">
            <a href="">
              <i class="icofont-facebook"></i>
              @angelaakorsu
            </a>
          </li>
          <li class="mb-2">
            <a href="">
              <i class="icofont-instagram"></i>
              @angelaakorsu
            </a>
          </li>
          <li class="mb-2">
            <a href="">
              <i class="icofont-twitter"></i>
              @angelaakorsu
            </a>
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
.panel a {
  color: #495057;
  text-decoration: none;
}

.panel a:hover, .panel a:focus {
  color: #ff7f5d;
  text-decoration: underline;
}

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
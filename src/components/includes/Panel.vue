<template>
  <section class="panel container py-5 text-start">
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
          <li class="mb-2"><a href="/" class="gen-link">Home</a></li>
          <li class="mb-2"><a href="/profile" class="gen-link">Profile</a></li>
          <li class="mb-2"><a href="/associations" class="gen-link">Associations</a></li>
          <li class="mb-2"><a href="/recognitions" class="gen-link">Awards & Recognitions</a></li>
          <li class="mb-2"><a href="/gallery" class="gen-link">Gallery</a></li>
          <li class="mb-2"><a href="/contact" class="gen-link">Contact</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 offset-lg-1">
        <h5>Publications</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/books" class="gen-link">Books</a></li>
          <li class="mb-2"><a href="/research" class="gen-link">Research</a></li>
          <li class="mb-2"><a href="/articles" class="gen-link">Articles</a></li>
          <li class="mb-2"><a href="/reports" class="gen-link">Reports</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 offset-lg-1 socials">
        <h5>Let's Interact</h5>
        <ul class="list-unstyled">
          <li class="mb-2">
            <a href="" class="gen-link">
              <i class="icofont-linkedin"></i>
              @angelaakorsu
            </a>
          </li>
          <li class="mb-2">
            <a href="" class="gen-link">
              <i class="icofont-facebook"></i>
              @angelaakorsu
            </a>
          </li>
          <li class="mb-2">
            <a href="" class="gen-link">
              <i class="icofont-instagram"></i>
              @angelaakorsu
            </a>
          </li>
          <li class="mb-2">
            <a href="" class="gen-link">
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
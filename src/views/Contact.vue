<template>
  <Header/>

  <main>
    <section class="contact">
      <div class="container py-lg-5 py-md-5">
        <PageHeader :heading="heading"/>
        <p class="text-center">Get in touch with me through any means that's comfortable for you</p>

        <div class="row">
          <div class="map">
            <iframe width="100%" height="350px" style="border:0" loading="lazy" allowfullscreen=""
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOXmY3uv53Q8R1mewYzqkgLQ&amp;key=AIzaSyD26Nns-xNji5W54RFF-AxMx1xtDWx_ccs">
            </iframe>
          </div>

          <div class="container">
            <div class="row mt-5 justify-content-center">
              <div class="col-lg-12">
                <div class="info-wrap">
                  <div class="row">
                    <div class="col-lg-3 info">
                      <i class="bx bx-map"></i>
                      <h4>Location:</h4>
                      <p>Dept. of Labour & Human Resource Studies
                        <br>
                        University of Cape Coast,
                      </p>
                    </div>

                    <div class="col-lg-3 info mt-4 mt-lg-0">
                      <i class="bx bxs-envelope"></i>
                      <h4>Email:</h4>
                      <p><a class="gen-link" href="mailto:support@dwadipa.com">her@angelaakorsu.com</a>
                        <br><a class="gen-link" href="mailto:support@dwadipa.com">hod@dolahrs.ucc.edu.gh</a>
                      </p>
                    </div>

                    <div class="col-lg-3 info mt-4 mt-lg-0">
                      <i class="bx bx-phone"></i>
                      <h4>Call:</h4>
                      <p><a class="gen-link" href="tel:+233541173963">+233 541 173 963</a>
                        <br>
                        <a class="gen-link" href="tel:+233501212723">+233 501 212 723</a>
                      </p>
                    </div>

                    <div class="col-lg-3 info mt-4 mt-lg-0">
                      <i class="bx bxl-whatsapp"></i>
                      <h4>WhatsApp:</h4>
                      <p><a class="gen-link" href="tel:+233541173963">+233 541 173 963</a>
                        <br>
                        <a class="gen-link" href="tel:+233501212723">+233 501 212 723</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5 justify-content-center">
              <div class="col-lg-12">
                <form action="#" method="POST" role="form" class="contact-form">
                  <input type="hidden" name="_token" value="QxySDOGYLqtBDPKi5HHAwKJM43DQ9xSAP6rjCziI">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="">

                    </div>

                    <div class="col-md-6 form-group">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="">

                    </div>
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject">

                  </div>

                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" placeholder="Your Message" style="margin-top: 0px; margin-bottom: 0px;" required=""></textarea>
                  </div>

                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Panel />
  </main>

  <Footer />
</template>

<script>
import Header from "@/components/includes/Header";
import PageHeader from "@/components/includes/PageHeader";
import Footer from "@/components/includes/Footer";
import Panel from "@/components/includes/Panel";

export default {
  name: "Contact",
  components: {Panel, Footer, PageHeader, Header},
  data() {
    return {
      heading: "Let's Get In Touch"
    }
  }
}
</script>

<style>
.contact .info-wrap {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  background: #fff;
}

.contact .info i {
  font-size: 20px;
  color: #ff7f5d;
  float: left;
  width: 44px;
  height: 44px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #2c3e50;
}

.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: black;
}

.contact .info:hover i {
  background: #ff7f5d;
  color: #fff;
}

.contact .contact-form {
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  padding: 30px;
  background: #fff;
}

.contact .contact-form .form-group{
  padding-bottom: 8px;
}

.contact .contact-form input,
.contact .contact-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

.contact .contact-form input {
  height: 44px;
}

.contact .contact-form textarea {
  padding: 10px 12px;
  resize: none;
  height: 150px;
}

.contact .contact-form button[type="submit"] {
  background: #ff7f5d;
  border: 0;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
}

.contact .contact-form button[type="submit"]:hover {
  background: #ff7f7c;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
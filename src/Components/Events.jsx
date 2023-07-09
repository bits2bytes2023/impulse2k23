import Band from "../assets/band1.jpg";

const Events = () => {
  return (
    <>
      <div class="container">
        <input type="radio" name="slider" class="d-none" id="s1" checked />
        <input type="radio" name="slider" class="d-none" id="s2" />
        <input type="radio" name="slider" class="d-none" id="s3" />
        <input type="radio" name="slider" class="d-none" id="s4" />
        <input type="radio" name="slider" class="d-none" id="s5" />

        <div class="cards">
          <label for="s1" id="slide1">
            <div class="card">
              <div class="image">
                <img src={Band} alt="" />
                <div class="dots">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div class="infos">
                <span class="name">Nike SuperRep Go</span>
                <span class="lorem">
                  Lorem ipsum dolor sit amet, sit amet adipiscing elit. Aenean
                  vel ansd . Nullam lorem. Nulla eu sodales
                </span>
              </div>
              <a href="/contact" class="btn-contact">
                details
              </a>
              <div class="socials">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </label>

          <label for="s2" id="slide2">
            <div class="card">
              <div class="image">
                <img src={Band} alt="" />
                <div class="dots">
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                  <div class="dot3"></div>
                </div>
              </div>
              <div class="infos">
                <span class="name">Free Run Flyknit</span>
                <span class="lorem">
                  Lorem ipsum dolor sit, adipiscing elit. Aenean vel sit ansd .
                  Nullam lorem. Nulla eu sodales karma stellus
                </span>
              </div>
              <a href="/contact" class="btn-contact">
                details
              </a>
              <div class="socials">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </label>

          <label for="s3" id="slide3">
            <div class="card">
              <div class="image">
                <img src={Band} alt="" />
                <div class="dots">
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                  <div class="dot3"></div>
                </div>
              </div>
              <div class="infos">
                <span class="name">Black Toe Union</span>
                <span class="lorem">
                  Lorem ipsum dolor, sit amet let kar adipiscing. Aenean vel
                  velit sit ansd . Nullam lorem. Nulla karma stellus
                </span>
              </div>
              <a href="/contact" class="btn-contact">
                details
              </a>
              <div class="socials">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </label>

          <label for="s4" id="slide4">
            <div class="card">
              <div class="image">
                <img src={Band} alt="" />
                <div class="dots">
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                  <div class="dot3"></div>
                </div>
              </div>
              <div class="infos">
                <span class="name">Retro High Og</span>
                <span class="lorem">
                  Lorem ipsum dolor sit, sit amet elit. Aenean sit amet sit amet
                  vel velit sit ansd. Nulla eu sodales stellus
                </span>
              </div>
              <a href="/contact" class="btn-contact">
                details
              </a>
              <div class="socials">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </label>

          <label for="s5" id="slide5">
            <div class="card">
              <div class="image">
                <img src={Band} alt="" />
                <div class="dots">
                  <div class="dot1"></div>
                  <div class="dot2"></div>
                  <div class="dot3"></div>
                </div>
              </div>
              <div class="infos">
                <span class="name">Off-White Air Jordan</span>
                <span class="lorem">
                  Lorem ipsum sit amet, sit amet elit. Aenean vel velit ansd .
                  Nullam lorem. Nulla eu sodales stellus
                </span>
              </div>
              <a href="/contact" class="btn-contact">
                details
              </a>
              <div class="socials">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-bookmark"></i>
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Events;

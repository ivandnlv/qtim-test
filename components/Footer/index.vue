<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__top-item">
        <span class="subtitle">Is there a project?</span>
        <h2 class="title">Let’s work</h2>
        <h2 class="title">together</h2>
      </div>
      <div class="footer__top-item">
        <div class="footer__top-item__content">
          <p>For all questions</p>
          <div>
            <a href="tel:89202780068">+7 (920) 278—00—68</a><br />
            <a href="mailto:qtim@agency.com">qtim@agency.com</a>
          </div>
        </div>
        <div class="footer__top-item__content">
          <p>Office in Russia</p>
          <div>
            <p>
              139 Ruben Station Lake<br />
              Drew, NM 52678
            </p>
            <a href="#" class="link">
              <nuxt-img src="img/location.svg" />
            </a>
          </div>
        </div>
        <div class="footer__top-item__content">
          <p>Office in Dubai</p>
          <div>
            <p>
              139 Ruben Station Lake<br />
              Drew, NM 52678
            </p>
            <a href="#" class="link">
              <nuxt-img src="img/location.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <ul class="footer__bottom-links">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Telegram</a></li>
      </ul>
      <button class="footer__bottom-btn"><span>Go</span></button>
      <ul class="footer__bottom-links">
        <li><a href="#">Behance</a></li>
        <li><a href="#">Linkedn</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/sass/variables';

.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 140px;
  padding: 140px 112px 30px 112px;
  width: 100%;
  background: $main-color;
  height: 900px;
  overflow: hidden;
  &__top {
    display: flex;
    justify-content: space-between;
    padding-right: 300px;
    &-item {
      &:first-of-type {
        min-width: 470px;
      }
      .title {
        color: #101010;
        font-size: 112px;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 15px;
        &:first-of-type {
          margin-top: 56px;
        }
      }
      .subtitle {
        color: #101010;
        font-size: 16px;
      }
      &:last-of-type {
        display: flex;
        flex-direction: column;
        gap: 36px;
        width: fit-content;
      }
      &__content {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .link {
          margin-top: 10px;
        }
        p,
        a {
          color: #101010;
          font-size: 16px;
        }
        img {
          margin-top: 12px;
          cursor: pointer;
          width: 32px;
          height: 32px;
        }
      }
    }
  }
  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-links {
      display: flex;
      gap: 32px;
      list-style-type: none;
      color: #101010;
      font-size: 16px;
      text-decoration: underline;
      text-decoration-thickness: 0.5px;
      text-underline-offset: 6px;
    }
    &-btn {
      position: absolute;
      border: none;
      background: #101010;
      color: #fff;
      transform: translateX(-50%);
      left: 50%;
      bottom: calc((358px / 2) * (-1));
      font-size: 32px;
      width: 358px;
      height: 358px;
      border-radius: 50%;
      transition: transform $animation-duration ease-in-out;
      cursor: pointer;
      &:hover {
        transform: translateX(-50%) scale(1.2);
      }
      span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 200px;
      }
    }
  }
}
</style>

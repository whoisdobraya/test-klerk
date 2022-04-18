
document.addEventListener("DOMContentLoaded", () => {


  const buttonFollow = document.querySelector(".btn-follow");
  const buttonText = buttonFollow.querySelector(".btn-text");
  const buttonSvg = buttonFollow.querySelector(".btn-svg");
  const FOLLOW = "Подписаться";
  const UNFOLLOW = "Отписаться";
  const COLOR_GRAY = "#999999";

  buttonFollow.addEventListener("click", () => {
    if (buttonText.textContent === UNFOLLOW) {
      buttonText.textContent = FOLLOW;
      buttonFollow.classList.remove('bg-gray-dark', '730:hover:bg-gray-middle')
    } else {
      buttonText.textContent = UNFOLLOW;
      buttonFollow.classList.add('bg-gray-dark', '730:hover:bg-gray-middle')
    }
    buttonSvg.classList.toggle("hidden");
  });

  const tabsWrap = document.querySelector(".tabs-wrap");
  const tabs = tabsWrap.querySelectorAll(".tab");
  const underline = document.querySelector(".underline");
  const categoryInfo = document.querySelectorAll('.tab-info');

  underline.style.width = `${tabs[0].offsetWidth}px`;

  tabsWrap.addEventListener("click", ({ target }) => {
    if (target.tagName === 'BUTTON') {
      underline.style.width = `${target.offsetWidth}px`;
      underline.style.left = `${target.offsetLeft}px`;
      const currentTab = target.dataset.tab;
      categoryInfo.forEach((item) => item.classList.add('hidden'));
      const currentInfoBlock = Array.from(categoryInfo).filter((item) => item.dataset.tab === currentTab)[0];
      currentInfoBlock.classList.remove('hidden')
    }
  });
});
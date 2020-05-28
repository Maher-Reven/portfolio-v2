export const handleScrollAnimations = (targetClass, addedClass, scrollTopNum) => {
  window.addEventListener("scroll", (e) => {

    let scrollTop = document.scrollingElement.scrollTop;
    let element = document.getElementsByClassName(targetClass)[0];

    scrollTop > scrollTopNum && element.classList.add(addedClass);
    scrollTop < scrollTopNum && element.classList.remove(addedClass);
  });
};

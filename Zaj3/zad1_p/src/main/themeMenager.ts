class ThemeMenager {
  constructor() {
    document
      .querySelector("#NB3>span")
      ?.addEventListener("click", this.changeTheme);
  }

  changeTheme = () => {
    if (document.body.hasAttribute("data-theme"))
      document.body.removeAttribute("data-theme");
    else document.body.setAttribute("data-theme", "Dark");
  };
}

export default ThemeMenager;

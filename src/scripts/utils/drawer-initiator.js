const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this.toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });
  },
  toggleDrawer(event, drawer) {
    event.stopPropagation();
    const navDrawerStyle = drawer.style;
    if (navDrawerStyle.width === '180px') navDrawerStyle.width = '0px';
    else navDrawerStyle.width = '180px';
  },
  closeDrawer(event, drawer) {
    event.stopPropagation();
    const navDrawerStyle = drawer.style;
    navDrawerStyle.width = '0px';
  },
};

export default DrawerInitiator;

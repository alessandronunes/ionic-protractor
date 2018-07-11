import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Home', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Home');
      });
    });

    it('should open Menu', () => {
      page.openMenu().then(click => {
      });
    });

    it('should open List page from menu', () => {
      page.openMenu().then(click => {
        page.getMenuItems().then(items => {
          items[1].click;
        }); 
      });
    });

  })
});

import { WebCardFlashPage } from './app.po';

describe('web-card-flash App', () => {
  let page: WebCardFlashPage;

  beforeEach(() => {
    page = new WebCardFlashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

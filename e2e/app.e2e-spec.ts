import { MzappAngularPage } from './app.po';

describe('mzapp-angular App', () => {
  let page: MzappAngularPage;

  beforeEach(() => {
    page = new MzappAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

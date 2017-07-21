import { FrontEndTemplatePage } from './app.po';

describe('front-end-template App', () => {
  let page: FrontEndTemplatePage;

  beforeEach(() => {
    page = new FrontEndTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

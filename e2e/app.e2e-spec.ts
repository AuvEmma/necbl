import { NecblPage } from './app.po';

describe('necbl App', function() {
  let page: NecblPage;

  beforeEach(() => {
    page = new NecblPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

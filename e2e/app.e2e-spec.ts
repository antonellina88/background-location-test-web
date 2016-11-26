import { BackgroundLocationTestPage } from './app.po';

describe('background-location-test App', function() {
  let page: BackgroundLocationTestPage;

  beforeEach(() => {
    page = new BackgroundLocationTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

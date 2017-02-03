import { TomoPagePage } from './app.po';

describe('tomo-page App', function() {
  let page: TomoPagePage;

  beforeEach(() => {
    page = new TomoPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

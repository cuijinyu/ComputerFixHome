import { ComputerFixHomePage } from './app.po';

describe('computer-fix-home App', () => {
  let page: ComputerFixHomePage;

  beforeEach(() => {
    page = new ComputerFixHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

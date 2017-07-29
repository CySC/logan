import { LoganPage } from './app.po';

describe('logan App', () => {
  let page: LoganPage;

  beforeEach(() => {
    page = new LoganPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

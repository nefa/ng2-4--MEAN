import { HelloBootstrapPage } from './app.po';

describe('hello-bootstrap App', () => {
  let page: HelloBootstrapPage;

  beforeEach(() => {
    page = new HelloBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

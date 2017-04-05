import { ZolotyxBlogPage } from './app.po';

describe('zolotyx-blog App', () => {
  let page: ZolotyxBlogPage;

  beforeEach(() => {
    page = new ZolotyxBlogPage();
  });

  it('should have dummy tests works', () => {
    page.navigateTo();
    expect(true).toEqual(true);
  });
});

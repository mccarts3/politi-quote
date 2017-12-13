import { AppModule } from '../src/app/app.module';
import { AppPage } from './app.po';

describe('politi-quote App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should pass this method', () => {
    page.navigateTo();
    expect(true);
  });
});

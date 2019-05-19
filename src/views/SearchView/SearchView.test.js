import SearchView from './SearchView';

describe('SearchView.prototype.constructor', () => {
  it('Should be an instance of Function', () => {
    expect(SearchView.prototype.constructor).toBeInstanceOf(Function);
  });

  it('Should be render search box correctly', () => {
    const searchBox = new SearchView();
    expect(searchBox).toBeInstanceOf(SearchView);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});

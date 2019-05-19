export default class SearchView {
  constructor() {
    this.onChange = () => null;

    const form = document.createElement('form');
    form.setAttribute('id', 'search-form');
    form.setAttribute('class', 'search-form');
    document.body.appendChild(form);

    form.innerHTML = `
      <input id="search" class="search-box" type="text" name="search" placeholder="Search Youtube" />
      <input type="submit" class="submit-button" value />
    `;

    form.addEventListener('submit', e => {
      e.preventDefault();
      this.onChange(e.target.elements.search.value);
    });
  }
}

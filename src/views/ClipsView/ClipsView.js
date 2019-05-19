export default class ClipsView {
  constructor() {
    const content = document.createElement('div');
    content.className = 'clips';
    document.body.appendChild(content);
    content.addEventListener('scroll', this.onScroll);
    this.content = content;
  }

  onMore = undefined;

  onScroll = e => {
    const el = e.target;
    if (el.scrollWidth === el.clientWidth + el.scrollLeft) {
      if (this.onMore) {
        this.onMore();
      }
    }
  };

  clear = () => {
    this.content.innerHTML = '';
  };

  renderEntry = data => {
    const entry = document.createElement('div');
    entry.setAttribute('class', 'clip-item');
    entry.setAttribute('style', `background-image: url(${data.preview})`);
    entry.innerHTML = `
      <div>
        <a target='_blank' href="'https://www.youtube.com/watch?v=${data.id}">
          ${data.title}
        </a>
        <h5 class='author-name'><i class='material-icons'>face</i>
        ${data.author}
        </h5>
        <p class='date'><i class="material-icons">today</i>
        ${data.publishedAt.slice(0, -14)}
        </p>
        <p class='views'><i class='material-icons'>visibility</i>
        ${data.views}
        </p>
        <p class='description'>${data.description}</p>
      </div>   
    `;
    this.content.appendChild(entry);
    ClipsView.srcollClips();
  };

  static srcollClips() {
    const slider = document.querySelector('.clips');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
}

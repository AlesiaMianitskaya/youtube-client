import ClipsView from './ClipsView';

describe('ClipsView.renderEntry', () => {
  it('Should be render clips correctly', () => {
    const clipView = new ClipsView();
    const clip = [
      {
        title: 'JavaScript',
        description: 'Web',
        author: 'Web Developer',
        publishedAt: '2018-09-06T10:47:49.000Z',
        preview: 'https:/img.jpg',
        views: '3000',
      },
    ];
    clip.forEach(clipView.renderEntry);
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});

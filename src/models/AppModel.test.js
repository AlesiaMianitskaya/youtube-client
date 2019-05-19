import { Response, Request, Headers, fetch } from 'whatwg-fetch';
import AppModel from './AppModel';

global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;

describe('AppModel.searchVideos', () => {
  const model = new AppModel('AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y');
  const keyword = 'javascript';
  it('Should be an instance of Function', async () => {
    expect(await model.searchVideos).toBeInstanceOf(Function);
  });

  it('Should return array of clips objects', async () => {
    const videos = await model.searchVideos(keyword);
    expect(videos).toBeInstanceOf(Array);
    videos.forEach(video => expect(video).toBeInstanceOf(Object));
  });

  it('Should return array of clips objects with specific properties', async () => {
    const videos = await model.searchVideos(keyword);
    expect(videos[0]).toHaveProperty('title');
    expect(videos[0]).toHaveProperty('description');
    expect(videos[0]).toHaveProperty('author');
    expect(videos[0]).toHaveProperty('publishedAt');
    expect(videos[0]).toHaveProperty('preview');
    expect(videos[0]).toHaveProperty('views');
  });

  it('Should return array of clips that titles contain keyword', async () => {
    const videos = await model.searchVideos(keyword);
    videos.forEach(video => expect(video.title.toLowerCase()).toMatch(keyword));
  });
});

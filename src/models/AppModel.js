export default class AppModel {
  constructor(apiKey) {
    this.params = {
      type: 'video',
      part: 'snippet',
      q: '',
      id: '',
      maxResult: '15',
      key: apiKey,
    };
  }

  async search(value) {
    this.params.part = 'snippet';
    this.params.q = value;
    const searchParams = new URLSearchParams(this.params);
    const url = `https://www.googleapis.com/youtube/v3/search?${searchParams.toString()}`;
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  }

  async getVideos(ids) {
    this.params.part = 'snippet,statistics';
    this.params.id = ids.join(',');
    const searchParams = new URLSearchParams(this.params);
    searchParams.delete('pageToken');
    const url = `https://www.googleapis.com/youtube/v3/videos?${searchParams.toString()}`;
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
  }

  async searchVideos(search) {
    const found = await this.search(search);
    const ids = found.items.map(i => i.id.videoId);
    const videos = await this.getVideos(ids);
    this.params.pageToken = found.nextPageToken;

    return videos.items.map(v => ({
      title: v.snippet.title,
      description: v.snippet.description,
      author: v.snippet.channelTitle,
      publishedAt: v.snippet.publishedAt,
      preview: v.snippet.thumbnails.high.url,
      views: v.statistics.viewCount,
    }));
  }
}

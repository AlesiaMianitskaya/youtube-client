import AppModel from '../models/AppModel';
import ClipsView from '../views/ClipsView';
import SearchView from '../views/SearchView';

export default class App {
  constructor() {
    this.q = '';
    this.model = new AppModel('AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y');
  }

  onSearch = async value => {
    this.clips.clear();
    this.q = value;
    const videos = await this.model.searchVideos(this.q);
    videos.forEach(this.clips.renderEntry);
  };

  onMore = async () => {
    const videos = await this.model.searchVideos(this.q);
    videos.forEach(this.clips.renderEntry);
  };

  async run() {
    this.search = new SearchView();
    this.search.onChange = this.onSearch;
    this.clips = new ClipsView();
    this.clips.onMore = this.onMore;
  }
}

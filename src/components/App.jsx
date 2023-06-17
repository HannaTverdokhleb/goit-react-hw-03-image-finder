import {Component} from 'react';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import {getImages} from 'api/images';


class App extends Component {
  state = {
    category: "",
    page: 1,
    imageList: [],
    isLoading: false,
    isError: '',
    showLoadMoreButton: true,
  }

  handleSearch = (category) => {
    this.setState({category});
  }

  handleLoadMore = () => {
    this.setState({page: this.state.page + 1});
  }

  async loadImages(append = false) {
    this.setState({isLoading: true});
    const pageValue = (append ? this.state.page : 1)
    let imageList = await getImages(this.state.category, pageValue);

    if (typeof imageList === 'string') {
      this.setState({imageList: [], isError: imageList, isLoading: false, showLoadMoreButton: false})
    } else {
      this.setState({
        imageList: (append ? [...this.state.imageList, ...imageList] : imageList),
        isLoading: false,
        showLoadMoreButton: imageList.length > 0,
        page: pageValue
      });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category && !this.state.category) {
      this.setState({imageList: []})
    } else if (prevState.category !== this.state.category) {
      this.loadImages()
    } else if (prevState.page < this.state.page) {
      this.loadImages(true)
    }
  }

  render() {
    const {imageList, isLoading, category, isError, showLoadMoreButton } = this.state;
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        {isError ?
          <div className="error">Oh no! We have the following error: <strong>{isError}</strong></div>
          :
          <>
            {imageList.length > 0 && 
              <>
                <ImageGallery imageList={imageList} />
                {(!isLoading && showLoadMoreButton) && <Button clickTOLoad={this.handleLoadMore} />}
              </>
            }
            {(imageList.length < 1 && category && !isLoading) && <div className="nothing">Nothing found :(</div> }
            {isLoading && <Loader />}
          </>
        }
      </>
    );
  }
};

export default App;

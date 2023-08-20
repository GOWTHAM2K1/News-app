import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  article = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC Sport",
      "title": "England reach first Women's World Cup final",
      "description": "England spoil co-hosts Australia's party by booking their place in the Women's World Cup final for the first time on a historic night in Sydney.",
      "url": "http://www.bbc.co.uk/sport/football/66499185",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1217F/production/_130811147_gettyimages-1618453462.jpg",
      "publishedAt": "2023-08-16T12:37:30.44382Z",
      "content": "England reached the Women's World Cup final for the first time as they spoiled co-hosts Australia's party on a historic evening in Sydney.\r\nSilencing a sell-out crowd at Stadium Australia with their … [+7669 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Container ship Joseph Schulte leaves Odesa amid Russia Black Sea attack fears",
      "description": "The Hong Kong-flagged Joseph Schulte had been trapped since Russia's full-scale invasion began.",
      "url": "http://www.bbc.co.uk/news/world-europe-66518504",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/130ED/production/_130816087_95347e0321f3ffbcfa419094a1238a7d14456385.jpg",
      "publishedAt": "2023-08-16T11:07:26.2417093Z",
      "content": "A merchant ship has left the Ukrainian port of Odesa, despite concerns Russia could target vessels in the Black Sea.\r\nThe Hong Kong-flagged Joseph Schulte had been trapped in the port since Russia la… [+2256 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Alec Baldwin: Report casts doubt over Rust actor's account of shooting",
      "description": "Mr Baldwin denies pulling the trigger of the prop gun which went off, killing Halyna Hutchins in 2021.",
      "url": "http://www.bbc.co.uk/news/entertainment-arts-66518663",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/602D/production/_130812642_crgettyimages-1358160868.jpg",
      "publishedAt": "2023-08-16T11:07:22.3347957Z",
      "content": "A new report into the fatal shooting on the set of the movie Rust appears to cast doubt over star and producer Alec Baldwin's accounts of events.\r\nMr Baldwin denies pulling the trigger of the prop gu… [+2154 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "The Killers apologise for offending fans in Georgia with Russian 'brother' remark",
      "description": "Fans booed frontman Brandon Flowers for asking them to welcome a fan from neighbouring Russia.",
      "url": "http://www.bbc.co.uk/news/entertainment-arts-66518658",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F885/production/_130812636_bfgettyimages-1447128653.jpg",
      "publishedAt": "2023-08-16T08:52:23.1007991Z",
      "content": "The Killers have apologised after frontman Brandon Flowers invited a Russian fan on stage during a concert in Georgia to play drums on a song.\r\nHe told the crowd to treat the Russian fan as their \"br… [+2917 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Behind Trump's huge support linger doubts on electability",
      "description": "Most Republicans plan to back Mr Trump if he wins the nomination, even if they want to move past him.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-66516295",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3CF1/production/_130810651_gettyimages-1610210185.jpg",
      "publishedAt": "2023-08-16T08:07:21.1080656Z",
      "content": "Every time Donald Trump has more criminal charges levelled against him, we all try to work out what this might mean for his campaign to be re-elected president. \r\nSo far each indictment has seen Mr T… [+4017 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Hawaii fires: First victims named as death toll reaches 106",
      "description": "Authorities in Maui named the first victims as Lahaina residents Robert Dyckman and Buddy Jantoc.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-66518502",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10F87/production/_130811596_58df3d908fe02f60fd8929d369d3718f8c72b1f8.jpg",
      "publishedAt": "2023-08-16T06:07:20.1316328Z",
      "content": "Media caption, Watch: 'This acrid smoke really sticks in your throat'\r\nThe first victims from the deadly wildfires that swept Maui island last week have been identified by officials.\r\nMaui's police d… [+1395 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Ukrainian prisoners of war say they were tortured at Russian prison",
      "description": "Former prisoners of war tell the BBC they were abused by Russian guards inside a detention facility.",
      "url": "http://www.bbc.co.uk/news/world-europe-66453692",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B298/production/_130702754_index_promo_976_opt_c.png",
      "publishedAt": "2023-08-16T04:07:18.1780562Z",
      "content": "Former Ukrainian captives say they were subjected to torture, including frequent beatings and electric shocks, while in custody at a detention facility in south-western Russia, in what would be serio… [+17696 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "'This acrid smoke really sticks in your throat'",
      "description": "Wildfires have destroyed the historic town of Lahaina, making it the most deadly fire in the US for a century.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-66517506",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13FED/production/_130810918_p0g6xp9b.jpg",
      "publishedAt": "2023-08-16T03:22:12.1635189Z",
      "content": "Wildfires have destroyed the historic town of Lahaina, making it the most deadly fire in the US for a century. \r\nThe BBC's Helena Humphrey reports from Upcountry Maui."
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Trump's court time in Fulton County will be quick. Others die waiting",
      "description": "The criminal justice system for most defendants in Fulton County is notoriously slow and dangerous.",
      "url": "http://www.bbc.co.uk/news/world-us-canada-66443927",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1219B/production/_130693147_gettyimages-1255472761.jpg",
      "publishedAt": "2023-08-16T00:52:18.3194214Z",
      "content": "In the coming days, Donald Trump will turn himself in to police in Georgia. His initial brush with the local criminal justice system is expected to last just hours - most other defendants are not so … [+6627 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Travis King: North Korea says US soldier blamed discrimination",
      "description": "Travis King, 23, dashed across the border from South Korea on 18 July while on a guided tour.",
      "url": "http://www.bbc.co.uk/news/world-asia-66517280",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0E83/production/_115651730_breaking-promo-976.png",
      "publishedAt": "2023-08-15T22:22:17.1151359Z",
      "content": "North Korea has said US soldier Travis King crossed into its territory last month because of \"inhuman maltreatment and racial discrimination\" in the army.\r\nThe 23-year-old private dashed across the b… [+374 chars]"
    }
  ]

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }

  convertCapitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1)

  };

  constructor(props) {
    super(props)
    this.state = {
      article: this.article,
      loading: false,
      page: 1,
      totalResults: 0


    }
    document.title = `${this.convertCapitalize(this.props.category)}-ReactNews`
  };

  async updateNews() {
    this.props.setProgress(0)
    this.setState({ loading: true })
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9f649790719942eebe4447a88aab8f82&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    this.props.setProgress(20)
    let parseddata = await data.json()
    this.props.setProgress(80)
    this.setState({
      article: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false

    });
    this.props.setProgress(100)
  };

  async componentDidMount() {
    //   this.setState({ loading: true })
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9f649790719942eebe4447a88aab8f82&page=1&pageSize=${this.props.pageSize}`
    //   let data = await fetch(url)
    //   let parseddata = await data.json()
    //   this.setState({
    //     article: parseddata.articles,
    //     totalResults: parseddata.totalResults,
    //     loading: false
    //   });
    //   // console.log(this.totalResults,parseddata.totalResults)
    //   // console.log(this.article)
    //   // console.log(parseddata.articles)
    this.updateNews()

  };


  nextPage = async () => {
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    //   // do nothing as number of pages is exceeding the total results
    // }
    // else {
    //   this.setState({ loading: true })
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9f649790719942eebe4447a88aab8f82&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //   let data = await fetch(url)
    //   let parseddata = await data.json()
    //   this.setState({
    //     page: this.state.page + 1,
    //     article: parseddata.articles,
    //     loading: false
    //   });
    // }
    this.setState({
      page: this.state.page + 1
    })
    this.updateNews()
  };

  prevPage = async () => {
    // this.setState({ loading: true })
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9f649790719942eebe4447a88aab8f82&page=${this.state.page11}&pageSize=${this.props.pageSize}`
    // let data = await fetch(url)
    // let parseddata = await data.json()
    // this.setState({
    //   page: this.state.page - 1,
    //   article: parseddata.articles,
    //   loading: false
    // });
    this.setState({
      page: this.state.page - 1
    })
    this.updateNews()

  };

  fetchMoreData = async() => {
    
    this.setState({
      page: this.state.page + 1
    })
    this.setState({ loading: true })
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9f649790719942eebe4447a88aab8f82&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parseddata = await data.json()
    this.setState({
      article: this.state.article.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
      loading: false
    });
  };

  render() {

    return (
      <>


        <h1 className=' my-10 text-center' style={{ margin: '35px' }}>ReactNews-Top {this.convertCapitalize(this.props.category)} Headlines</h1>
        {this.state.loading && <Loading />}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={this.state.loading&&<Loading />}>                    
          <div className="container">
          <div className='row'>
            {this.state.article.map((element) => {

              return <div className="col-md-4 items " key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 70) : ''}
                  description={element.description ? element.description.slice(0, 100) : ''}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.source.name ? element.source.name : 'Unknown'}
                  publishedAt={element.publishedAt}
                />
              </div>

              
            })}
            </div>
            </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevPage}>&laquo; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.nextPage}>Next &raquo;</button>
        </div> */}

      </>
    )
  }
}

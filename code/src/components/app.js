import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="headerBoarder">
          <div className="header">
            <a href=""><strong>Home</strong></a>
            <a href="">Technology</a>
            <a href="">Creativity</a>
            <a href="">Entrepreneurship</a>
            <a href="">Self</a>
            <a href="">Culture</a>
            <a href="">Digital design</a>
            <a href="">Popular on Medium</a>
            <a href="">Politics</a>
            <a href="">More</a>
            <button className="getStartedHeaderButton">Get started</button>
          </div>
         </div>
         <div className="container">
          <div className="hero">
            <div className="leftHero">
              <h1>Interesting ideas that set your mind in motion. </h1>
              <p> Hear directly from the people who know it best. From tech to politics to creativity and more - whatever your interest, we&apos;ve got you covered.</p>
              <div className="buttons">
                <button className="getStartedButton">Get started</button>
                <button className="learnMoreButton">Learn more</button>
              </div>
            </div>
            <div className="rightHero">
              <img src ="/images/medium-image.png"/>
            </div>
          </div>
              <div className="grid">
                  <div className="box">
                    <div className="boxImage"><img src ="/images/medium-image-puff-1.jpeg"/></div>
                    <div className="textBox">
                      <div>
                        <h2>The Boy Who Tamed the Sea</h2>
                        <p>At 5:30 am, on any morning I can handle it, I&apos;ll slip out of the dark mouth of my covers and creep trough the silver lig..</p>
                      </div>
                        <div className="writerBox">
                          <div className="writerImage"><img src ="/images/writer-1.png"/></div>
                          <div>
                            <p><strong>Carl Moore</strong></p>
                            <p>Oct 27 8 min read</p>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="boxImage"><img src ="/images/medium-image-puff-2.png"/></div>
                    <div className="textBox">
                      <div>
                        <h2>The Role of Human Emotions in the Future of Transport</h2>
                        <p>Getting from A to B is about to feel very different</p>
                      </div>
                      <div className="writerBox">
                        <div className="writerImage"><img src ="/images/writer-2.jpeg"/></div>
                        <div>
                          <p><strong>Ben Bland</strong></p>
                          <p>Nov 1 7 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="boxImage"><img src ="/images/medium-image-puff-4.jpeg"/></div>
                    <div className="textBox">
                      <div>
                        <h2>The Burning Season</h2>
                        <p>You cannot save everyone when the fires come to Nothern California</p>
                      </div>
                      <div className="writerBox">
                        <div className="writerImage"><img src ="/images/writer-4.jpeg"/></div>
                        <div>
                          <p><strong>Lindsey Smith</strong></p>
                          <p>Nov 9 31 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="boxImage"><img src ="/images/medium-image-puff-3.png"/></div>
                    <div className="textBox">
                      <div>
                        <h2>The March of the Losers</h2>
                        <p>Around the world, the victims are becoming the abusers, and Donald Trump is their king</p>
                      </div>
                      <div className="writerBox">
                        <div className="writerImage"><img src ="/images/writer-3.jpeg"/></div>
                        <div>
                          <p><strong>Henry Wismayer</strong></p>
                          <p>Nov 10 8 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }

}

export default App

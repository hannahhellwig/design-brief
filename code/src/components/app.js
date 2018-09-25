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
                      <h2>The Boy Who Tamed the Sea</h2>
                      <p>At 5:30 am, on any morning I can handle it, I&apos;ll slip out of the dark mouth of my covers and creep trough the silver lig..</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="boxImage"><img src ="/images/medium-image-puff-2.png"/></div>
                    <div className="textBox">
                      <h2>The Role of Human Emotions in the Future of Transport</h2>
                      <p>Getting from A to B is about to feel very different</p>
                    </div>
                  </div>
                </div>
          </div>
      </div>
    )
  }

}

export default App

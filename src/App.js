import './App.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Title from './Components/Title';
import NextMeetup from './Components/NextMeetup';
import Member from './Components/Member';
import PastMeetups from './Components/PastMeetups';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <section id="header">
          <Header />
        </section>
        <section id="next-meextup">
          <Title>Next Meetup</Title>
          <NextMeetup />
        </section>
        <section id="about-meetup">
          <Title>About Meetup</Title>
          <p>Come and meet other developers interested in the Javascript and it's library in the Greater Jakarta area</p>
          <p>Twitter: <a href="https://twitter.com/jakartajs">@JakartaJS</a> and we use the hashtag <a href="https://twitter.com/hashtag/jakartajs?src=hashtag_click">#JakartaJS</a></p>
        </section>
        <section id="members">
          <div class="d-flex flex-row justify-content-between">
            <Title>Members</Title>
            <a href="meetup.com">See All</a>
          </div>
          <Member />
        </section>
        <section id="past-meetups">
          <div class="d-flex flex-row justify-content-between">
            <Title>Past Meetups</Title>
            <a href="meetup.com">See All</a>
          </div>
          <PastMeetups/>
        </section>
        <section id="footer" className="text-center">
          <b>Copyright Hacktiv8 @2021</b>
        </section>
      </div>
    </div>
  );
}

export default App;

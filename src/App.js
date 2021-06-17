import './App.css';
import Header from './components/Header/Header'
import Project from './components/Project/Projects'
import Weather from './Images/weather.jpg'
import NoteTaker from './Images/notetaker.jpg'
import Nyt from './Images/nyt.jpg'
import Password from './Images/password.jpg'
import Ibudget from './Images/ibudget.jpg'
import Footer from './components/Footer/Footer'

const arr = [
  {title:"Weather Forecast", link: "something", imageURL:Weather},
  {title:"Note Taker", link: "something", imageURL:NoteTaker},
  {title:"NYT or Not", link: "something", imageURL:Nyt},
  {title:"Password Generator", link: "something", imageURL:Password},
  {title:"iBudget", link: "something", imageURL:Ibudget},
  
]

function App() {
  return (
    <div className="page-wrapper">
      <Header/>
      <section class="container">
                <h2 id="my-work">My Work</h2>
                <div className="grid">
      {
        arr.map((item, key) => (
          <Project isBig={key === 0 ? true : false} key={key} title={item.title} link={item.link} imageURL={item.imageURL}/>
        ))
      }
      </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;

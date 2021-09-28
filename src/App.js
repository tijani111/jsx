
import './App.css';
import myWonderfulImage from "./klora.jfif"
function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 class="title red">Your name here</h1>

<br >

<img src={myWonderfulImage} alt="klora"> </img>
</br>

<br >

<img src="/Download.jfif" alt="Download" ></img>
</br>
</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" > </source>

</video>
    </div>
  );
}

export default App;

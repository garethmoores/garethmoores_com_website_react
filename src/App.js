import logo from './logo.svg';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import backgroundImage from "./img/dominik-dancs-opv2F2Ns7qg-unsplash.jpg";
import cardImage1 from "./img/pexels-photo-2004161.jpeg";
import cardImage2 from "./img/pexels-photo.jpg";
import cardImage3 from "./img/pexels-photo-325111.jpeg";
import cardImage4 from "./img/pexels-photo-1181263.jpeg";
import avatarImage1 from "./img/pexels-photo-220453.jpeg";
import avatarImage2 from "./img/photo-1494790108377-be9c29b29330.jpeg";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

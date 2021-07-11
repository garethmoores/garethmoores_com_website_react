import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import backgroundImage from "./img/dominik-dancs-opv2F2Ns7qg-unsplash.jpg";
import cardImage1 from "./img/pexels-photo-2004161.jpg";
import cardImage2 from "./img/pexels-photo.jpg";
import cardImage3 from "./img/pexels-photo-325111.jpg";
import cardImage4 from "./img/pexels-photo-1181263.jpg";
import avatarImage1 from "./img/pexels-photo-220453.jpg";
import avatarImage2 from "./img/photo-1494790108377-be9c29b29330.jpg";
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

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#ffffff"
    },
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    },
    blogsContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    card: {
        maxWidth: "100%"
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
}))

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
              Blog
          </Typography>
        </Toolbar>
      </AppBar>
        <Box className={classes.hero}>
            <Box>React Blog</Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
                Articles
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={cardImage1}
                                component='img'
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography varant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6000 species, ranging
                                    across all continents except Antartica.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src={avatarImage1} />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={cardImage2}
                                component='img'
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography varant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6000 species, ranging
                                    across all continents except Antartica.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src={avatarImage2} />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={cardImage3}
                                component='img'
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography varant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6000 species, ranging
                                    across all continents except Antartica.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src={avatarImage1} />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={cardImage4}
                                component='img'
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React useContext
                                </Typography>
                                <Typography varant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6000 species, ranging
                                    across all continents except Antartica.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src={avatarImage2} />
                                <Box ml={2}>
                                    <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <BookmarkBorderIcon />
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Box my={4} className={classes.paginationContainer}>
                <Pagination count={10} />
            </Box>
        </Container>
    </div>
  );
}

export default App;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ImageAvatars from '../ImageAvatars';
import { People } from '@material-ui/icons';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import API from '../../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '65ch',
    },
  },
  textField: {
    width: '65ch',
    marginBottom: '20px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 650
  },
  select: {
    marginLeft: 0
  }
}));

export default function PostForm() {
  const classes = useStyles();

  const [category, setCategory] = React.useState('');
  // state values for the recipe form
  const [Title, SetTitle] = React.useState('');
  const [Image, SetImage] = React.useState('');
  const [Ingredients, SetIngredients] = React.useState('');
  const [Instructions, SetInstructions] = React.useState('');
  const [Link, SetLink] = React.useState('');
  const [Description, SetDescription] = React.useState('');
  // state values for the resturant form
  const [ResTitle, SetResTitle] = React.useState('')
  const [ResAddress, SetResAddress] = React.useState('');
  const [ResImage, SetResImage] = React.useState('');
  const [ResReview, SetResReview] = React.useState('');
  const [ResLink, SetResLink] = React.useState('');
  const [ResDescription, SetResDescription] = React.useState('');
  
  const handleChange = (event) => { 
    setCategory(event.target.value);
  };
  const handleSubmit = () => {
    console.log("button clicked")
    if(category === "Recipe"){
      API.savePost({
        title: Title,
        description: Description,
        imageURL: Image,
        ingredients: Ingredients,
        instructions: Instructions,
        link: Link 
       }).then(console.log("data saved"))
        // .catch(err, console.log(err))
    }
    else{
      API.savePost({
        title: ResTitle,
        description: ResDescription,
        address: ResAddress,
        imageURL: ResImage,
        body: ResReview,
        link: ResLink
      }).then(console.log("data saved"))
      // .catch(err, console.log(err))
    }
  } // need on route to post a new post
  const renderFields = (category) => {
    switch(category) {
      case "Recipe":
        let formFields = 
        <div>
          <TextField
            className={classes.textField}
            required
            id="recipeName"
            label="Recipe Name"
            placeholder="Enter a name for the recipe..."
            variant="outlined"
            name="recipeName"
            onChange={e => SetTitle(e.target.value)}
          />
          <br/>
          <TextField
            className={classes.textField}
            required
            id="recipeDescription"
            label="Recipe Description"
            placeholder="Enter a short description about the recipe"
            variant="outlined"
            name="recipeDescription"
            onChange={e => SetDescription(e.target.value)}
          />
          <br/>
          <TextField
            className={classes.textField}
            id="recipeImage"
            label="Recipe image"
            placeholder="Enter a image for the recipe..."
            variant="outlined"
            name="recipeImage"
            onChange={e => SetImage(e.target.value)}
          />
          <br/>
          <Typography>Field to insert image...</Typography>
          <br/>
          <TextField
            className={classes.textField}
            required
            id="ingredients"
            label="Ingredients"
            multiline
            rows={10}
            placeholder="List the Ingredients"
            variant="outlined"
            name="ingredients"
            onChange={e => SetIngredients(e.target.value)}
          />
          <br/>
          <TextField
            className={classes.textField}
            required
            id="instructions"
            label="Instructions"
            multiline
            rows={10}
            placeholder="Type the recipe instructions..."
            variant="outlined"
            name="instructions"
            onChange={e => SetInstructions(e.target.value)}
          />
          <br/>
          <TextField
            className={classes.textField}
            id="recipeLink"
            label="Recipe Link"
            placeholder="Enter a link to the recipe..."
            variant="outlined"
            name="recipeLink"
            onChange={e => SetLink(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create Post
          </Button>
        </div>;
        return formFields;

      case "Restaurant":
        formFields = 
        <div>
          <TextField
            className={classes.textField}
            required
            id="restaurantName"
            label="Restaurant Name"
            placeholder="Enter the restaurant's name..."
            variant="outlined"
            name="restaurantName"
            onChange={e => SetResTitle(e.target.value)}
          />
          <br/>
          <TextField
            className={classes.textField}
            required
            id="ResturantDescription"
            label="Resturant Description"
            placeholder="Enter a short description about the resturant"
            variant="outlined"
            name="resturantDescription"
            onChange={e => SetResDescription(e.target.value)}
          />
          <br/>
          <TextField
            className={classes.textField}
            id="ResturantAddress"
            label="Resturant Address"
            placeholder="Enter a address for the Resturant..."
            variant="outlined"
            name="resturantAddress"
            onChange={e => SetResAddress(e.target.value)}

          />
          <br/>
          <TextField
            className={classes.textField}
            id="ResturantImage"
            label="Resturant image"
            placeholder="Enter a image for the Resturant..."
            variant="outlined"
            name="resturantImage"
            onChange={e => SetResImage(e.target.value)}
          />
          <br/>
          <Typography>Field to insert image...</Typography>
          <br/>
          <TextField
            className={classes.textField}
            required
            id="review"
            label="Restaurant Review"
            multiline
            rows={10}
            placeholder="What was your experience at this restaurant?"
            variant="outlined"
            name="review"
            onChange={e => SetResReview(e.target.value)}
          />
          <br/>
          <TextField
            className={classes.textField}
            id="restaurantLink"
            label="Restaurant Website"
            placeholder="Enter a link to the restaurant's website..."
            variant="outlined"
            name="restaurantLink"
            onChange={e => SetResLink(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create Post
          </Button>
        </div>;
        return formFields;
      default:
        return;
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Create a Post"
      />
      <CardActionArea>
        <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select Category</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={category}
              onChange={handleChange}
              label="Category"
            >
              <MenuItem value={"Recipe"}>Recipe</MenuItem>
              <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
            </Select>
          </FormControl>
            { renderFields(category) }

            {/* <TextField
              className={classes.textField}
              required
              id="outlined-required"
              label="Title"
              defaultValue="Enter a title..."
              variant="outlined"
            />
            <br/>
            <Typography>Field to insert image...</Typography>
            <br/>
            <TextField
              className={classes.textField}
              required
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={4}
              defaultValue="What do you want to say..."
              variant="outlined"
            />
            <br/>
            <TextField
              className={classes.textField}
              id="outlined-required"
              label="Link"
              defaultValue="Enter a url..."
              variant="outlined"
            /> */}

          </div>
        </form>  
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}

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

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

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
          />
          <br/>
          <TextField
            className={classes.textField}
            id="recipeLink"
            label="Recipe Link"
            placeholder="Enter a link to the recipe..."
            variant="outlined"
            name="recipeLink"
          />
          <Button variant="contained" color="primary">
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
          />
          <br/>
          <TextField
            className={classes.textField}
            id="restaurantLink"
            label="Restaurant Website"
            placeholder="Enter a link to the restaurant's website..."
            variant="outlined"
            name="restaurantLink"
          />
          <Button variant="contained" color="primary">
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

import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const Footer =() => {
  const styles = {
    footer: {
      textAlign: "center",
      backgroundColor: "#3f51b5",
      color: "white",
      height: 64,
      marginTop: 20,
      paddingTop: 20
    }
  }
    return(
      <div>
        <div className="row" id="copyright" style={styles.footer}>
          <div className="col-lg-12 ">
              <p className="meduim">© 2021 Developed by: Brien Barr, Dan Bohn, Jack Tussing, & Kanasia Hursey</p>
            </div>
          </div>
      </div>
    )
}
export default Footer;
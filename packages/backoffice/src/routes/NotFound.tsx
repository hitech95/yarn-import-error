import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import Typography from "@material-ui/core/Typography";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

const NotFound: FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Paper elevation={0}>
        <Box className={classes.paper}>
          <Avatar className={classes.avatar}>
            <NotListedLocationIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            align={"center"}
            gutterBottom={true}
          >
            404 - Not Found
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default NotFound;

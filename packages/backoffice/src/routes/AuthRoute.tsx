import React, { FC, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Box, makeStyles, Paper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import Typography from "@material-ui/core/Typography";

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

const AuthRoute: FC<any> = ({ path, component: Comp, ...rest }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (loading) {
    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Paper elevation={0}>
          <Box className={classes.paper}>
            <Avatar>
              <NotListedLocationIcon />
            </Avatar>
            <Typography component="h1" variant="h5" align={"center"}>
              Loading...
            </Typography>
          </Box>
        </Paper>
      </Container>
    );
  }

  return (
    <Route path={path} render={(props) => <Comp {...props} {...rest} />} />
  );
};

export default AuthRoute;

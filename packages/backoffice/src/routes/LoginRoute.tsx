import React, { FC } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { RouteComponentProps } from "react-router";

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

const LoginRoute: FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Paper elevation={0}>
        <Box className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            align={"center"}
            gutterBottom={true}
          >
            Login
          </Typography>

          <form>
            <TextField
              name="email"
              label="Email"
              type="email"
              autoComplete="current-email"
              margin="normal"
              variant="outlined"
              autoFocus
              required
              fullWidth
            />
            <TextField
              type="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              required
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};
export default LoginRoute;

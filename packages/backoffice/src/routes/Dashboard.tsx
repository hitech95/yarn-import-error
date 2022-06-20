import { FC } from "react";
import { RouteComponentProps } from "react-router";
import Container from "@material-ui/core/Container";
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

const Dashboard: FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Paper elevation={0}>
        <Box className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            align={"center"}
            gutterBottom={true}
          >
            Dashboard
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard;

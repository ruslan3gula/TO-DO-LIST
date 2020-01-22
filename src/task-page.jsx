import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";

export const TaskPage = () => {
  return (
    <form>
      <TextField id="title" label="Title" />
      <TextField id="description" label="Description" />
      <TextField id="date" label="Date" type="date" />

      <Button>Save</Button>
      <Button>Cancel</Button>
    </form>
  );
};

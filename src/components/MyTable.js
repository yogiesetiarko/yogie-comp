import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  // Select,
  // FormControl,
  // MenuItem,
  // Container,
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Tooltip,
  CircularProgress, 
  Backdrop,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
  nameCell: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: "flex-end",
  },
  pagination: {
    '& .Mui-selected': {
      backgroundColor: getColor || 'black',
      color: 'white',
    },
  },
  pageSize: {
    height: "30px",
    borderRadius: "6px",
    border: "1px solid #D1D5DC",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginTop: "5px",
  },
  paginationText: {
    fontSize: "14px",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#687083",
  },
  mypadding: {
    "& .MuiSelect-outlined": {
      // paddingRight: "0px"
      paddingTop: "14px",
      paddingBottom: "14px",
      paddingLeft: "20px",
      paddingRight: "30px",
    },
  },
  headText: {
    fontSize: "12px",
    color: "#687083",
    fontWeight: "bold",
  },
  bodyTextBlack: {
    fontSize: "14px",
    fontWeight: "regular",
    color: "#111827",
    fontStyle: "normal",
  },
  bodyTextGrey: {
    fontSize: "14px",
    fontWeight: "regular",
    color: "#687083",
    fontStyle: "normal",
  },
  tableRow: {
    height: 20,
  },
  conTextBlack: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  dropdown: {
    color: "black",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "28px",
  },
  btnEdit: {
    backgroundColor: "#111827",
    color: "white",
    width: "28px",
    height: "28px",
    padding: "6px",
    borderRadius: "6px",
  },
  btnDelete: {
    backgroundColor: "#111827",
    color: "white",
    width: "35px",
    height: "35px",
    padding: "6px",
    borderRadius: "6px",
    marginLeft: "10px",
    cursor: "pointer",
  },
}));

function MyTable({
  data,
  numberOfColumn,
  isLoading
}) {
  return (
    <div>
      <Card
        style={{
          position: 'relative',
          zIndex: 0,
        }}
      >
        <Backdrop  open={isLoading} style={{color: '#fff', zIndex: 100, position: 'absolute' }}>
          <CircularProgress 
            // color={color} 
            color={'white'}
          />
        </Backdrop>
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      width: "100px",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      className={classes.headText}
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      Alles
                    </Typography>
                  </TableCell>
                  <TableCell
                    style={{
                      width: "100px",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      className={classes.headText}
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      Alles
                    </Typography>
                  </TableCell>
                  <TableCell
                    style={{
                      width: "100px",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      className={classes.headText}
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      Alles
                    </Typography>
                  </TableCell>                  
                </TableRow>
              </TableHead>
              {data.length > 0 ? (<>
                <TableBody>
                  <TableRow 
                    hover 
                    // key={`${customer.song_id}-${idx}`} 
                    // selected={selectedCustomers.indexOf(customer.song_id) !== -1}
                  >
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        className={classes.bodyTextGrey}
                      >
                        A
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        className={classes.bodyTextGrey}
                      >
                        B
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="subtitle2"
                        className={classes.bodyTextGrey}
                      >
                        C
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </>) : (<>
                <TableRow>
                  <TableCell colSpan={numberOfColumn} align="center">
                    <Typography variant="subtitle2" className={classes.bodyTextBlack}>
                      No Data
                    </Typography>
                  </TableCell>
                </TableRow>
              </>)}
            </Table>
          </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <Grid alignContent="space-between" container justifyContent="space-between" spacing={3}>
            <Grid item>
              <div style={{ display: 'flex' }}>
                <div style={{ marginTop: '7px' }}>
                  <ThemeProvider theme={theme}>
                    <Typography className={classes.paginationText}>Item per page:</Typography>
                  </ThemeProvider>
                </div>{' '}
                <div style={{ marginLeft: '10px' }}>{pageSizePagination}</div>
              </div>
            </Grid>

            <Grid item>
              <Pagination
                count={totalData}
                shape="rounded"
                className={classes.pagination}
                // handleChangePage={onChangePage}
                page={page}
                onChange={handleChangePage}
              />
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

export default MyTable;
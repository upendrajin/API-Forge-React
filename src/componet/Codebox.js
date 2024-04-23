import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button";
import { TableContainer } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "transparent",
}));

const Codbox = (props) => {
  return (
    <Box>
      <TableContainer fixed>
        <Grid
          xs={12}
          container
          sx={{
            backgroundColor: "#24233b",
            color: "#FFFFFF",
            borderRadius: "5px",
            padding: "20px 20px",
            margin: "0px 0px 15px",
          }}
        >
          <Grid xs={12} sx={{ textAlign: "left", marginBottom: "15px" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Stack spacing={0.5} direction="row">
                <Item
                  sx={{ backgroundColor: "#ff605c" }}
                  className="circle"
                ></Item>
                <Item
                  sx={{ backgroundColor: "#ffbd44" }}
                  className="circle"
                ></Item>
                <Item
                  sx={{ backgroundColor: "#00ca4e" }}
                  className="circle"
                ></Item>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            sx={{
              borderRadius: "4px",
              fontSize: "13px",
              backgroundColor: "#49465cbc",
              width: "100%",
              padding: "5px 10px",
            }}
          >
            <p>
              <span className="c1">fetch</span>(
              <span className="c2"> '{props.api_c}' </span>
              )<br /> .<span className="c1">then</span>(
              <span>
                <span> res</span> =&gt;&nbsp;
              </span>
              res.<span className="c1">json</span>() )
              <br /> .<span className="c1">then</span>(
              <span className="c4"> console</span>.<span>log</span> );
            </p>
          </Grid>
        </Grid>
      </TableContainer>
    </Box>
  );
};

export default Codbox;

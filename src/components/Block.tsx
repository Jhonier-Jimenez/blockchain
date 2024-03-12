import { useEffect, useState } from "react";
import BlockProps from "../ts/interfaces/blockProps";
import transformTransactions from "../functions/transformTransactions";
import buildMerkleTree from "../functions/buildMerkleTree";
import { transactions } from "../data/data";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Block: React.FC<BlockProps> = ({
  blockNumber,
  prevHash,
  nonce,
  imageURL,
  peerNumber,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [rootHashString, setRootHashString] = useState("");
  const [hashesArray, setHashesArray] = useState([[""]]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const createBlockData = () => {
    try {
      let hashes = transformTransactions(transactions, "1");
      // [1, tx1, 1, tx2, 1, tx3]
      // despues de la primer iteracion
      // [tx1Nounce1, tx2Nounce1, tx3Nounce1]

      const {rootHash, branches} = buildMerkleTree(hashes, nonce);
      setRootHashString(rootHash[0]);
      setHashesArray(branches);
      console.log("ROOT HASH", rootHash[0]);
      console.log("BRANCHES",branches);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    createBlockData();
  }, []);

  return (
    <>
      <Card sx={{ maxWidth: 550 , m:'2rem'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="peer number">
              P{peerNumber}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`Block number: ${blockNumber}`}
          subheader={`Base nonce: ${nonce}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          style={{ width: '100%', height: '100%' }}
          alt="Bitcoin Block image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Prev Hash: {prevHash}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Root Hash: {rootHashString}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Transactions at this block:</Typography>
            <Typography paragraph>
              {JSON.stringify(transactions)}
            </Typography>
            <Typography paragraph>
              {hashesArray.map((hash, index)=>{
                return <>
                <span>Branch {index}</span>
                {hash.map((asdf)=>{
                    return <><li>{asdf}</li></>
                })}
                </>
              })}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default Block;

import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
  title: string;
  price: number;
  id: string;
}

const ProductItem: React.FC<Props> = ({title, price, id}) => {
  return (
    <Grid item sm md={6} lg={4}>
      <Card>
        <CardHeader title={title}/>
        <CardContent>
          <strong>{price} KGS</strong>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={'/products/' + id}>
            <ArrowForwardIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
};

export default ProductItem;
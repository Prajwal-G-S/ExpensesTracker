import { useRef, useEffect, useContext } from 'react';
import { Grid, Typography, } from '@material-ui/core';
import { PushToTalkButtonContainer, PushToTalkButton } from '@speechly/react-ui';
import { TransactionsContext } from './context/transactionsContext';
import useStyles from './styles';

import DetailsCard from './components/detailsCard/DetailsCard';
import InputCard from './components/inputCard/InputCard';

const App = () => {
  const classes = useStyles();
  const mainCard = useRef(null);
  const { transactions } = useContext(TransactionsContext);

  useEffect(() => {
    mainCard.current?.scrollIntoView({ behaviour: "smooth" });
  }, [transactions])


  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>

        <Grid item xs={12} sm={3} className={classes.mobile}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.main} ref={mainCard}>
          <InputCard />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <DetailsCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          <DetailsCard title="Expense" />
        </Grid>

      </Grid>
      {/* <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer> */}

        {/* <Typography className={classes.mobile} variant='h5' style={{ color: 'white', marginLeft: '1rem', position: 'absolute' }} >
          View code on {' '}
          <a href="https://github.com/Masud28-tech/voice-manager" target='_blank' style={{ textDecoration: 'none' }}>
            Github
          </a>
        </Typography> */}
    </div>
  )
}

export default App;
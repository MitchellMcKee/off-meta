import '@fontsource/inter';
import { Link } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import styles from './Home.module.css'
import { CardInfo } from '../types/types';
import CommanderCard from '../components/commander-card.component';
import data from '../assets/commanders.json';

function Home() {
  const sortedData = [...data].sort((a, b) => b.totalEntries - a.totalEntries);

  return (
    <>
      <div className={styles.home}>
        <Typography color="primary" level='h2' sx={{ paddingTop: '8px'}}>Choose a Commander</Typography>
        <div className={styles.cardContainer}>
            {sortedData.map((displayCard: CardInfo) => (
              <Link to={`/commander/${displayCard.card.join('+')}`} key={displayCard.id}>
                <div className={styles.displayCard}>
                  <CommanderCard {...displayCard}> </CommanderCard>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  )
}

export default Home

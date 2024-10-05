import '@fontsource/inter';
import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import styles from './Commander.module.css'
import DisplayCard from '../components/card.component';
import mockData from '../mocks/Talion, the Kindly Lord.json';

function Commander() {
  const params = useParams();

  return (
    <>
      <div className={styles.commander}>
        <Link to='/'>
          <Typography color="primary" level='h2' sx={{ paddingTop: '8px'}}>{params.commanderName}</Typography>
        </Link>
        <div className={styles.cardContainer}>
            {mockData.map(displayCard => (
                <div className={styles.displayCard} key={displayCard.id}>
                  <DisplayCard {...displayCard}> </DisplayCard>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Commander
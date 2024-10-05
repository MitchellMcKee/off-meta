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
        <Typography color="primary" level='h2' sx={{ paddingTop: '8px'}}>{params.commanderName}</Typography>
        <div className={styles.cardContainer}>
            {mockData.map(displayCard => (
              <Link key={Math.random()} to="/">
                <div className={styles.displayCard}>
                  <DisplayCard {...displayCard}> </DisplayCard>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  )
}

export default Commander
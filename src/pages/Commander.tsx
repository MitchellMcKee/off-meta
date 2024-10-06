import '@fontsource/inter';
import { Link, useParams } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import styles from './Commander.module.css'
import DisplayCard from '../components/card.component';
import { CardInfo } from '../types/types';
import { useQuery } from '@tanstack/react-query';

function Commander() {
  const params = useParams();
  const url = '/' + params.commanderName + '.json';
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(url).then((res) =>
        res.json(),
      ),
  })
  
  if (isPending) {
      return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
    
  return (
    <>
      <div className={styles.commander}>
        <Link to='/'>
          <Typography color="primary" level='h2' sx={{ paddingTop: '8px'}}>{params.commanderName}</Typography>
        </Link>
        <div className={styles.cardContainer}>
            {data.map((displayCard: CardInfo) => (
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
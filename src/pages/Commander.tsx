import '@fontsource/inter';
import { Link } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import './Commander.css'
import { CardInfo } from '../types/types';
import DisplayCard from '../components/card.component';

function Commander() {
  const dihada: CardInfo = {
    id: 0,
    card: ['Dihada, Binder of Wills'],
    relatedItems: ['Blood Moon', 'Obliterate'],
    imageLinks: ["https://cards.scryfall.io/art_crop/front/d/d/ddeb54d6-a600-42b9-98df-20f8d58caed8.jpg?1685554091"],
    totalEntries: 73
  }

  const cards = new Array(6).fill(dihada);

  return (
    <>
      <div className='commander'>
        <Typography color="primary" level='h2' sx={{ paddingTop: '8px'}}>Dihada, Binder of Wills</Typography>
        <div className='card-container'>
            {cards.map(displayCard => (
              <Link key={Math.random()} to="/">
                <div className='display-card'>
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

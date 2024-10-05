import '@fontsource/inter';
import { Link } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import './Home.css'
import { CardInfo } from '../types/types';
import DisplayCard from '../components/card.component';

function Home() {
  const dihada: CardInfo = {
    id: 0,
    commander: ['Dihada, Binder of Wills'],
    spice: ['Blood Moon', 'Obliterate'],
    imageLinks: ["https://cards.scryfall.io/art_crop/front/d/d/ddeb54d6-a600-42b9-98df-20f8d58caed8.jpg?1685554091"],
    totalEntries: 73
  }

  const talion: CardInfo = {
    id: 1,
    commander: ['Talion, the Kindly Lord'],
    spice: ['Okina, Temple to the Grandfathers', 'Jace, the Mind Sculptor'],
    imageLinks: ["https://cards.scryfall.io/art_crop/front/6/2/62a6b452-c796-45c6-b4d1-0ae3d675e38e.jpg?1692939468"],
    totalEntries: 252
  }

  const jeska: CardInfo = {
    id: 2,
    commander: ['Jeska, Thrice Reborn', 'Tymna, the Weaver'],
    spice: ['Blood Moon', 'Abeyance'],
    imageLinks: ["https://cards.scryfall.io/art_crop/front/4/8/48caf4c4-745c-4072-bf3d-1a3fa7c3bc9c.jpg?1644853023",
      "https://cards.scryfall.io/art_crop/front/b/c/bc7cbe9b-324e-42b8-94e2-36e91cb32163.jpg?1644853048"
    ],
    totalEntries: 75
  }

  const commanders = [dihada, talion, jeska];

  return (
    <>
      <div className='home'>
        <Typography color="primary" level='h2' sx={{ paddingTop: '8px'}}>Choose a Commander</Typography>
        <div className='card-container'>
            {commanders.map(displayCard => (
              <Link to="/Commander" key={displayCard.id}>
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

export default Home

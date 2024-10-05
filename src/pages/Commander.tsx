import '@fontsource/inter';
import { Link } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import './Commander.css'
import DisplayCard from '../components/card.component';
import mockData from '../mocks/Talion, the Kindly Lord.json';

function Commander() {
  return (
    <>
      <div className='commander'>
        <Typography color="primary" level='h2' sx={{ paddingTop: '8px'}}>Dihada, Binder of Wills</Typography>
        <div className='card-container'>
            {mockData.map(displayCard => (
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
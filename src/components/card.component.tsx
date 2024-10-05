import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/joy/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from './card.module.css'
import { CardInfo } from '../types/types';
import pepper from '../assets/cropped-pepper.png'

function SpiceLevel(totalDecklists: number) {
  const spiceLevel = []

  for (let i = 5; i >= totalDecklists; i--) {
    spiceLevel.push(<img src={pepper} width='24px' height='24px' key={Math.random()}></img>);
  }

  return spiceLevel
}

export default function ActionAreaCard({ 
  id = Math.random(), 
  card = [], 
  relatedItems = [], 
  imageLinks = ['https://cards.scryfall.io/art_crop/front/d/d/ddeb54d6-a600-42b9-98df-20f8d58caed8.jpg?1685554091'], 
  totalEntries}: CardInfo) {

  return (
    <Card key={id}>
      <CardActionArea sx={{ width: 252 }}>
        <div className={styles.imageContainer}>
          <CardMedia
          key={imageLinks[0]}
          component="img"
          image={imageLinks[0]}
          alt={card[0]}
          sx={{width: 240}}
          />
        </div>
        <CardContent sx={{padding: '8px'}}>
          {SpiceLevel(relatedItems.length).map(pepper => pepper)}
          <div>
              <Typography level="title-sm" noWrap>{card.join(' + ')}</Typography>
          </div>
          <div className={styles.footerContainer}>
              <div>
                  {relatedItems.map((moxfieldId: string) => (
                      <div key={moxfieldId} className={styles.spice}>
                          <a href={`https://www.moxfield.com/decks/${moxfieldId}`}>
                            <Typography level="body-xs" noWrap sx={{width: 180}}>{moxfieldId}</Typography>
                          </a>
                      </div>
                  ))}
              </div>
              <div className={styles.entriesContainer}>
                  <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>{totalEntries}</Typography>
                  <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>Entries</Typography>
              </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
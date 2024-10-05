import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/joy/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from './commander-card.module.css';
import { CardInfo } from '../types/types';
import pepper from '../assets/cropped-pepper.png';

export default function ActionAreaCard({ 
  id = Math.random(), 
  card = [], 
  relatedItems = [], 
  imageLinks = ['https://cards.scryfall.io/art_crop/front/d/d/ddeb54d6-a600-42b9-98df-20f8d58caed8.jpg?1685554091'], 
  totalEntries}: CardInfo) {

  const cardName = card.join(' and ')
  const width = card.length > 1 ? 144 : 288

  return (
    <Card key={id}>
      <CardActionArea sx={{ width: 288}}>
        <div className={styles.imageContainer}>
            {imageLinks.map((link: string) => (
                <CardMedia
                key={link}
                component="img"
                height="180"
                image={link}
                alt={cardName}
                sx={{width: width, height: 176}}
                />
            ))}
        </div>
        <CardContent sx={{padding: '8px'}}>
          <div>
              <Typography level="title-sm" noWrap>{card.join(' + ')}</Typography>
          </div>
          <div className={styles.footerContainer}>
              <div>
                  {relatedItems.map((cardName: string) => (
                      <div key={cardName} className={styles.spice}>
                          <img src={pepper} width='16px' height='16px'></img>
                          <Typography level="body-xs" noWrap sx={{width: 180}}>{cardName}</Typography>
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
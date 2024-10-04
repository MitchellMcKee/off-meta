import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/joy/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './card.component.css'
import { CardInfo } from '../types/types';

export default function ActionAreaCard({ id, commander, spice, imageLinks, totalEntries}: CardInfo) {
  return (
    <Card key={id} sx={{ width: 280, height:  240}}>
      <CardActionArea>
        <div className='image-container'>
            {imageLinks.map((link: string) => (
                <CardMedia
                key={link}
                component="img"
                height="180"
                image={link}
                alt="green iguana"
                sx={{width: 280, height: 128}}
                />
            ))}
        </div>
        <CardContent>
        <div>
            {commander.map((cardName: string) => (
                <div key={cardName}>
                    <Typography level="title-sm">{cardName}</Typography>
                </div>
            ))}
        </div>
        <div className='footer-container'>
            <div>
                {spice.map((cardName: string) => (
                    <Typography key={cardName} level="body-xs">{cardName}</Typography>
                ))}
            </div>
            <div className='entries-container'>
                <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>{totalEntries}</Typography>
                <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>Entries</Typography>
            </div>
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
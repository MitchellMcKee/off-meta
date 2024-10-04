import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import { CardInfo } from '../types/types';

export default function MultipleInteractionCard({ id, commander, spice, imageLinks, totalEntries}: CardInfo) {
    return (
        <Card key={id} sx={{ width: 320 }}>
            <CardOverflow
                variant="soft"
                sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                justifyContent: 'space-around',
                py: 1,
                borderTop: '1px solid',
                borderColor: 'divider',
                }}
            ></CardOverflow>
          <div>
            {commander.map(cardName => (
                <div key={cardName}>
                    <Typography level="title-lg">{cardName}</Typography>
                </div>
            ))}
            {spice.map(cardName => (
                <div key={cardName}>
                    <Typography level="body-sm">{cardName}</Typography>
                </div>
            ))}
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
            >
            </IconButton>
          </div>
            {imageLinks.map(link => (
                <AspectRatio key={link} minHeight="120px" maxHeight="200px">
                    <img
                    src={link}
                    srcSet={link}
                    loading="lazy"
                    alt=""
                    />
                </AspectRatio>
            ))}
          <CardContent orientation="horizontal" sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <div>
              <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>{totalEntries} Entries</Typography>
            </div>
          </CardContent>
        </Card>
      );
}
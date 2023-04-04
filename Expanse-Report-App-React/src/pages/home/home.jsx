import React from 'react';
import "./home.css"; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];


export default function HomeComponent() {

    return (
      <div>
        

        {/* Hero section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Get a grip on your finances with our personal expense management tool</h1>
            <Button variant="contained" href="/sign_In">Start managing your expenses now</Button>
        
          </div>
        </section>
  
        {/* Features section */}
        <section className="features">
          <h2>Key Benefits</h2>
          <ul>
            <li>Track your expenses easily</li>
            <li>Set and manage your budget</li>
            <li>Get alerts when you exceed your spending limits</li>
          </ul>
        </section>
  
        {/* Testimonials section */}
        <section class="rev-section">

          <div class="reviews">

            <div class="review">
              <div class="head-review">
              <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" width="250px"/>   
              </div>
              <div class="body-review">
                <div class="name-review">Nathan D.</div>
                <div class="place-review">Germany</div>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half"></i>
                </div>
                <div class="desc-review">"I used to struggle with keeping track of my spending, but this tool makes it so much easier. Thank you!"</div>
              </div>
            </div>
          
            <div class="review">
              <div class="head-review">
              <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" width="250px"/>   
              </div>
              <div class="body-review">
                <div class="name-review">Mary Will</div>
                <div class="place-review">Paris</div>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="desc-review">"This tool has helped me stay on top of my expenses and save money. Highly recommended!"</div>
              </div>
            </div>


            <div class="review">
              <div class="head-review">
              <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" width="250px"/>   
              </div>
              <div class="body-review">
                <div class="name-review">Kevin Tuck</div>
                <div class="place-review">New York</div>
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="desc-review">"This tool improve my financial health and  finally achieve my goals.  awsome tool!"</div>
              </div>
            </div>
          </div>
        </section>


        {/* How it works section */}
        <section className="how-it-works">
          <h2>How it works</h2>
          <p>Simply sign up for an account and start tracking your expenses.</p> 
          <p>Our tool will automatically categorize your transactions and provide you with insights into your spending habits.</p>
        </section>
  
        {/* Plans and pricing section */}
        <section className="plans">
          <h2>Plans and Pricing</h2>
          <p>Choose the plan that works best for you:</p>
          <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    /*variant={tier.buttonVariant as 'outlined' | 'contained'}*/
                    variant="outlined"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
        </section>
  
        {/* Footer section */}
        <footer>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
          <p>Copyright © 2023</p>
        </footer>
      </div>
    );
  }
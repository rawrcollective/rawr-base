import React from 'react';
import classNames from 'classname';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
  card: {
    boxShadow: 'none'
  },
  appBar: {
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid rgba(57, 63, 68, 0.85)'
  },
  bigAvatar: {
    width: window.innerWidth/4,
    height: window.innerWidth/4.2,
  },
  avatar: {
    margin: 10,
  },
  navButton: {
      float: 'right',
  },
  leftAppBar: {
    marginLeft: '0',
    marginRight: 'auto'
},
centerAppBar: {
    marginRight: 'auto',
    marginLeft: 'auto'
},
  rightAppBar: {
      marginRight: '0',
      marginLeft: 'auto'
  }
});

function FullSite (props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
    <AppBar className={classes.appBar} position="static" color="default">
        <Toolbar>
          <div className={classes.leftAppBar}><Typography variant="title" color="inherit">
            aryawellness@greenlotus.center
          </Typography>
          </div>
          <div className={classes.leftAppBar}>
            <Typography variant="title" color="inherit">
                (877)862-0303
            </Typography>
          </div>
          <div className={classes.rightAppBar}>
                <IconButton className={classes.navButton} aria-label="Facebook">
                    <Icon className={classNames(classes.icon, 'fab fa-facebook-f')} />
                </IconButton>
                <IconButton className={classes.navButton} aria-label="Twitter">
                    <Icon className={classNames(classes.icon, 'fab fa-twitter')} />
                </IconButton>
                <IconButton className={classes.navButton} aria-label="Yelp">
                    <Icon className={classNames(classes.icon, 'fab fa-yelp')} />
                </IconButton>
                <IconButton className={classes.navButton} aria-label="Link">
                    <Icon className={classNames(classes.icon, 'fas fa-link')} />
                </IconButton>
                <IconButton className={classes.navButton} aria-label="Cart">
                    <Icon className={classNames(classes.icon, 'fas fa-shopping-cart')} />
                </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0}>
        {/* This is the top header section */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography align="left" variant="headline" component="h1">
              ARYA WELLNESS CENTER
            </Typography>
            <Typography align="left" component="h3" variant="subheading">
              Arya Wellness Center is a Maryland Medical Cannabis Certified (MMCC) Provider and Complimentary and Alternative Medicine pain and wellness clinic. Our licensed and board-certified physicians offer certification for medical marijuana cards in Maryland and Pennsylvania in a registered medical marijuana clinic in Silver Spring MD
            </Typography>
          </Paper>
        </Grid>
        {/* This is the banner section */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="headline" component="h1" />
            <Typography
              component="h3"
              variant="subheading"
              style={{fontStyle: 'italic'}}
            >
              Dr Sharma's inspiration for medical cannabis started when he saw the benefits afforded cancer and HIV patients during his time in California. His goal is to bring this natural therapy to Maryland.
            </Typography>
          </Paper>
        </Grid>
        {/* This is a container for the services */}
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                variant="headline"
                component="h1"
                style={{textDecoration: 'underline'}}
              >
                Our Services
              </Typography>
              <Typography component="h3" variant="subheading">
                Taking Care of You
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
            <CardContent align="center">
                <Avatar
                  alt="Adelle Charles"
                  src="/img/lotus-img-holder.webp"
                  className={classNames (classes.avatar, classes.bigAvatar)}
                />
                <Typography
                  variant="headline"
                  component="h1"
                  style={{textDecoration: 'underline'}}
                >
                  CERTIFICATION
                </Typography>
                <Typography component="h3" variant="subheading">
                  3 simple steps
                </Typography>
                  <ol style={{textAlign:'left'}}>
                    <li>
                      Go to Maryland Medical Cannabis Commission Website and register as a patient
                    </li>
                    <li>
                      Gather any supporting evidence for certification (meds, clinic notes, radiology)
                    </li>
                    <li>
                      Get scheduled by:
                      <ol>
                        <li>email - aryawellness@greenlotus.center</li>
                        <li>use link bellow</li>
                        <li>calling 877-862-0303</li>
                      </ol>
                    </li>
                  </ol>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
            <CardContent align="center">
                <Avatar
                  alt="Adelle Charles"
                  src="/img/lotus-img-holder.webp"
                  className={classNames (classes.avatar, classes.bigAvatar)}
                />
                <Typography
                  variant="headline"
                  component="h1"
                  style={{textDecoration: 'underline'}}
                >
                  CONCIERGE
                </Typography>
                <Typography component="h3" variant="subheading">
                  The Support You Need
                </Typography>
                <Typography component="p">
                  For Our Patients who need extra help I will certify you and accompany you at premier dispensaries near by.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
            <CardContent align="center">
                <Avatar
                  alt="Adelle Charles"
                  src="/img/lotus-img-holder.webp"
                  className={classNames (classes.avatar, classes.bigAvatar)}
                />
                <Typography
                  variant="headline"
                  component="h1"
                  style={{textDecoration: 'underline'}}
                >
                  HOME CARE
                </Typography>
                <Typography component="h3" variant="subheading">
                  Putting Patients First
                </Typography>
                <Typography component="p">
                  Patient who can not safely make it to clinic, we come to you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
            <CardContent align="center">
                <Avatar
                  alt="Adelle Charles"
                  src="/img/lotus-img-holder.webp"
                  className={classNames (classes.avatar, classes.bigAvatar)}
                />
                <Typography
                  variant="headline"
                  component="h1"
                  style={{textDecoration: 'underline'}}
                >
                  PHYSICIAN RESOURCES
                </Typography>
                <Typography component="h3" variant="subheading">
                  Education and Lectures
                </Typography>
                <Typography component="p">
                  We serve as a resource to providers who want to learn more about Cannabis as Medicine. Please Click Link to email Dr. Sharma TODAY!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent align="center">
                <Avatar
                  alt="Adelle Charles"
                  src="/img/lotus-img-holder.webp"
                  className={classNames (classes.avatar, classes.bigAvatar)}
                />
                <Typography
                  variant="headline"
                  component="h1"
                  style={{textDecoration: 'underline'}}
                >
                  PATIENT EDUCATION
                </Typography>
                <Typography component="h3" variant="subheading">
                  Service Subtitle
                </Typography>
                <Typography component="p">
                  We partner with dispensaries and other caregivers to educate the community. We are here to answer your questions. The link below is to sign up for the most recent set of talks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent align="center">
                <Avatar
                  alt="Adelle Charles"
                  src="/img/lotus-img-holder.webp"
                  className={classNames (classes.avatar, classes.bigAvatar)}
                />
                <Typography variant="headline" component="h2">
                  SITE REPLACEMENT PHASE 2
                </Typography>
                <Typography component="p">
                  site replacement with aryawellness.com <br />
                  coming soon
                </Typography>
              </CardContent>
              {/* <CardActions>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions> */}
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography align="center" variant="headline" component="h1">
              OUR SERVICES
            </Typography>
            <Typography
              align="center"
              component="h3"
              variant="subheading"
              style={{fontStyle: 'italic'}}
            >
              Medical Cannabis Consultation
            </Typography>
            <Typography align="left" component="p">
              We are a boutique medical, pain, and wellness clinic and Maryland Medical Cannabis Certified (MMCC) Provider staffed by compassionate, licensed, board certified physicians with specializations in Internal Medicine and Pediatrics. We provide wholistic wellness resources including certifications for legally qualifying patients to obtain medical cannabis (medical marijuana). We provide education and detailed treatment plans customized to our patient’s needs.
            </Typography>
            <Typography
              align="left"
              component="h3"
              variant="subheading"
              style={{fontStyle: 'italic'}}
            >
              Services
            </Typography>
            <Typography align="left" component="p">
              Concierge Service: Available for patients who want hands-on advice at the dispensary from a doctor and for those who require one on one support. Please email or call for pricing; this service has to be reserved.
            </Typography>
            <Typography align="left" component="p">
              Follow up: Available to all patients through web portal, phone, and at clinic.
            </Typography>
            <Typography align="left" component="p">
              Home Service: Available for the disabled with severe illness. Please call for details (number).
            </Typography>
            <Typography align="left" component="p">
              Specials: Veterans qualify for a discount. Call or email for details. Thank You for your sacrifice!
            </Typography>
            <Typography align="left" component="p">
              Same Day Certification - If you already have your MMCC ID number, we will certify you today! Simply CLICK HERE
            </Typography>
            <Typography align="left" component="h3" variant="subheading">
              Get Certified - Medical Marijuana Card in 3 easy steps!
            </Typography>
            <Typography align="left" component="p">
              The state of Maryland requires a visit with a Medical Cannabis Certified Physician who can provide you with a letter of recommendation that allows you to get your medical marijuana or cannabis card. Follow the simple steps below to get evaluated and to get your card:
            </Typography>
            <Typography align="left" component="p">
              o Certification Checklist:

              1. Go to Maryland Medical Cannabis Commission Website and register as a patient and to receive your MMCC ID number.

              2. Gather any supporting evidence for certification (prescription meds,

              clinic notes, radiology / imaging etc.)

              3. Schedule and evaluation appointment and fill out the online forms on this link. Be sure to bring your valid government ID card, relevant medical files, clinic notes or prescriptions and MMCC ID number (if you have one). If you have your MMCC ID number we will certify you same day.

              ​

              After your evaluation, we submit our recommendation to the Maryland Medical Cannabis Commission to facilitate the processes of getting a Medical Marijuana card. After we submit our evaluation and recommendation and you receive your ID card from the MMCC,  you may visit a dispensary to purchase and  up to 120 grams of cannabis legally across Maryland.

              Got questions? Contact us here

              ​

              *Please note that we are not a Medical Marijuana Dispensary

              *Note It May Take up to 45 days to receive you MMCC ID CARD
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}

FullSite.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (FullSite);

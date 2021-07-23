import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Category from './components/cards/category/Category';
import CategoryDropdown from './components/dropdown/categorydropdown/CategoryDropdown';
import Appcontainer from './containers/Appcontainer';
import './App.css'
import OfferSlider from './components/offercarousal/Offerslider';
import Productcards from './components/cards/products/Productcards';
import { Womenslist } from './list/Womenslist';
import { Mensfootware } from './list/Mensfootware';

function App() {
  return (
    <div className="App">
      <Appcontainer>
        <Category />

        <OfferSlider />

        <Container className={'category-container'}>
          <h5>Womens</h5>
        </Container>
        <Productcards list={Womenslist} />

        <Container className={'category-container'}>
          <h5>Mens Footware</h5>
        </Container>
        <Productcards list={Mensfootware} />
      </Appcontainer>
    </div>
  );
}

export default App;

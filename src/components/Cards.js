import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Here is a preview of some upcoming stories</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/wannacry.jpg'
              text='The WannaCry attack infected 230,000 computers in 150 different countries on the first day'
              label='Ransomeware'
              path='/cybersecurity'
            />
            <CardItem
              src='images/img-3.jpg'
              text='NotPetya caused an estimated $10 billion in damages and managed to shutdown the largest shipping company in the world'
              label='Ransomware'
              path='/cybersecurity'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/rockyou.jpg'
              text='the rockyou.com data breach exposed 30M passwords. This is where the rockyou.txt password list got its name '
              label='Data Breach'
              path='/cybersecurity'
            />
            <CardItem
              src='images/notpetya.jpg'
              text='in 2016 DYN suffered a massive DDoS attach that took out major portions of the internet for most of the day'
              label='DDoS Attack'
              path='/cybersecurity'
            />
            <CardItem
              src='images/stuxnet.jpg'
              text='The Stuxnet Virus was the first virus in history to cause physical damage and nearly destroyed the Iranian Nuclear Program'
              label='Worms'
              path='/cybersecurity'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

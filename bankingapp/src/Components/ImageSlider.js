import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import CreditCardImage from '../images/CreditCard.png';
import AccountImage from '../images/Account.png';
import VisitUsImage from '../images/Visitus.png';
import useNavigation from '../hooks/use-navigation';
function ImageSlider() {
  const {navigate} = useNavigation();
  const slideImages = [
    {
      image: CreditCardImage,
      caption: 'First Slide',
      buttonLabel: 'Apply now',
      label: 'Buy now, pay later',
      handleClick : ()=>{ navigate('/');
    console.log("hey hey hey")}
    },
    {
      image: AccountImage,
      caption: 'Second Slide',
      buttonLabel: 'Open now',
      label: 'Your Financial Freedom Starts Here',
      handleClick : ()=>{ navigate('/')}
    },
    {
      image: VisitUsImage,
      caption: 'Third Slide',
      buttonLabel: 'Visit us',
      label: 'Banking made easy',
      handleClick : ()=>{ navigate('/')}
    }
  ];

  const slideProperties = {
    duration: 2000,
    transitionDuration: 200,
    infinite: true
  };

  const slideContainerStyle = {
    position: 'relative'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    color: '#ffffff',
    padding: '20px'
  };

  const buttonStyle = 'px-4 py-2 bg-gray-800 text-white rounded mb-4';
  const labelStyle = 'text-2xl font-bold';

  return (
    <div className="slide-container">
      <Slide {...slideProperties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} style={slideContainerStyle}>
            <img
              src={slideImage.image}
              alt={slideImage.caption}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }}
            />
            <div className="absolute top-0 right-0 mr-36 w-full h-full flex flex-col items-end justify-end"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '74px',
                color: '#ffffff'
              }}>
              <p className={labelStyle}>{slideImage.label}</p>
              <button  onClick={slideImage.handleClick} className={buttonStyle}>{slideImage.buttonLabel}</button>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default ImageSlider;

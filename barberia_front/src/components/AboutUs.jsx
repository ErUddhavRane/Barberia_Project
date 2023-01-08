import React from 'react'
import Navbar from './Navbar'
import '../components/About.css'
import Footer from './Footer';


const AboutUs = () => {
  return (
    <div>
      <div className="about">
        <Navbar />
        <h1 className='text-light mt-5'>About Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-7 offset-2">
            <p>
              Step back from your busy life and chill out in Barberia, our vibe is kind and informal. We’re always up for a chat or if you want to just relax while we work on your hair, that’s possible too. Enjoy our wide selection of premium products and hair gels. Our barber brings the technical expertise to the table, all you need to bring is yourself. Get in touch now – our team will be happy to talk you through the variety of treatments and grooming services that we offer. Whatever it is that has forced customers to find our services, our professional barbers don’t disappoint. We are fully devoted to advocating healthy hair and groomed lives with our pampering treatments. Our professional barbers listen closely to the customer, supplying a tailored treatment designed to resolve muscle tension, groom and shave to perfection. Get one of our fresh, sharp haircuts that are currently in style – you won’t regret it! No matter the length you’re after, from shaved sides to styled curls, we’ve got you covered. Our wash and haircut service supplies the best cleanse and restyle option. Want to go for a makeover? Clip your mane down to a daring low buzz and get the uber-cool, clipped hairstyle guaranteed to trade up your look and style.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
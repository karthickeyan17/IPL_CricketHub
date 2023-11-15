import React from 'react';

import { images } from '../constants';
import '../CSS/Best_Captains.css';


const SubHeading = ({title}) => (
  <div style={{ marginBottom : '1rem'}}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt='spoon' className='spoon__img'/>
  </div>
);
const Best_Captains = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Captain" />
      <h1 className="headtext__cormorant">The Best Captains of IPL</h1>

      <div className="Content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">A Best Captain is Who </p>
        </div>
        <p className="p__opensans"> Play with the same focus and intensity you expect from your teammates. All the best cricket captains lead by example. Whenever your time comes to bat or bowl, give it everything you've got. A consistently solid performance will earn your team's respect and fuel their desire to win.                 Dhoni,Rohit,Virat have been the best of all other captains with those quality</p>
      </div>

      
    </div>
  </div>
);

export default Best_Captains;

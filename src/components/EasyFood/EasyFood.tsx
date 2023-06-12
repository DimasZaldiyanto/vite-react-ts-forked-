import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './EasyFood.module.css';
import { Ellipse42Icon } from './Ellipse42Icon.js';
import { Ellipse43Icon } from './Ellipse43Icon.js';
import { Ellipse44Icon } from './Ellipse44Icon.js';
import { Ellipse45Icon } from './Ellipse45Icon.js';
import { Rectangle89Icon } from './Rectangle89Icon.js';
import { Rectangle92Icon } from './Rectangle92Icon.js';
import { Star6Icon } from './Star6Icon.js';
import { Vector106Icon } from './Vector106Icon.js';
import { Vector107Icon } from './Vector107Icon.js';
import { Vector108Icon } from './Vector108Icon.js';
import { Vector109Icon } from './Vector109Icon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const EasyFood: FC<Props> = memo(function EasyFood(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.logo}>Easy Food</div>
      <div className={classes.findYour}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Find </span>
          <span className={classes.label2}>Your</span>
        </p>
        <div className={classes.textBlock}>
          <p></p>
        </div>
      </div>
      <div className={classes.discoverUnforgettableCulinaryE}>
        Discover unforgettable culinary experiences with just one click on our culinary recommendation app!
      </div>
      <div className={classes.favoriteFood}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label3}>Favorite </span>
          <span className={classes.label4}>Food</span>
        </p>
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.rectangle88}></div>
      <div className={classes.signIn}>Sign In</div>
      <div className={classes.ellipse42}>
        <Ellipse42Icon className={classes.icon2} />
      </div>
      <div className={classes.aliBurhanB2xbNzXiEToUnsplashRe}></div>
      <div className={classes.vector106}>
        <Vector106Icon className={classes.icon3} />
      </div>
      <div className={classes.vector108}>
        <Vector108Icon className={classes.icon4} />
      </div>
      <div className={classes.vector107}>
        <Vector107Icon className={classes.icon5} />
      </div>
      <div className={classes.vector109}>
        <Vector109Icon className={classes.icon6} />
      </div>
      <div className={classes.rectangle89}>
        <Rectangle89Icon className={classes.icon7} />
      </div>
      <div className={classes.seeRecommend}>See Recommend</div>
      <div className={classes.home}>Home</div>
      <div className={classes.review}>Review</div>
      <div className={classes.likedFoods}>Liked foods</div>
      <div className={classes.categories}>Categories</div>
      <div className={classes.rectangle92}>
        <Rectangle92Icon className={classes.icon8} />
      </div>
      <div className={classes.ourHappyCostumer}>Our Happy Costumer</div>
      <div className={classes._47107kReview}>4.7 (10.7k Review)</div>
      <div className={classes.ellipse43}>
        <Ellipse43Icon className={classes.icon9} />
      </div>
      <div className={classes.ellipse44}>
        <Ellipse44Icon className={classes.icon10} />
      </div>
      <div className={classes.ellipse45}>
        <Ellipse45Icon className={classes.icon11} />
      </div>
      <div className={classes.star6}>
        <Star6Icon className={classes.icon12} />
      </div>
      <div className={classes.rectangle91}></div>
      <div className={classes.startYourJourney}>Start Your journey</div>
      <div className={classes.shadow}></div>
      <div className={classes.iPhone13}></div>
      <div className={classes.shadow2}></div>
      <div className={classes.iPhone132}></div>
      <div className={classes.screen}></div>
      <div className={classes.image9}></div>
      <div className={classes.image10}></div>
      <div className={classes.foodNearYou}>
        <div className={classes.textBlock2}>Food</div>
        <div className={classes.textBlock3}>Near You!</div>
      </div>
    </div>
  );
});

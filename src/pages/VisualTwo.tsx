import { memo } from 'react';
import type { FC } from 'react';

import resets from '../styles/VisualTwo/_resets.module.scss';
import classes from '../styles/VisualTwo/_visualtwo.module.scss';
import AppLayout from 'src/layout/AppLayout';

interface Props {
  className?: string;
}

const VisualTwo: FC<Props> = memo(function VisualTwo(props = {}) {
  return (
    <AppLayout>
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.miamiL}></div>
      <div className={classes.miamiR}></div>
      <div className={classes.miamiM}></div>
      <div className={classes.sideProfileKhaled}></div>
      <div className={classes.deepInside}>
        However, deep inside, he felt a yearning for something more—a desire to share his wisdom and inspire young
        minds. And so, an unexpected twist of fate led DJ Khaled down a new path—a path that led him to become a
        professor.
      </div>
      <div className={classes.onceUponATime}>
        Once upon a time in the bustling city of Miami, a renowned music producer and DJ named DJ Khaled was riding the
        waves of success. Known for his catchphrases, infectious beats, and collaborations with A-list musicians, DJ
        Khaled had conquered the music industry.{' '}
      </div>
      <div className={classes.khaledWChain}></div>
      <div className={classes.oneDayP}>
        <div className={classes.textBlock}>
          One day, DJ Khaled received an invitation from a prestigious university. The invitation was from the dean of
          the School of Arts and Entertainment, who had heard about DJ Khaled&#39;s unmatched talent and his unique
          ability to motivate and uplift others. The dean saw an opportunity to bring DJ Khaled&#39;s charismatic energy
          and knowledge to the academic world. Intrigued by the invitation, DJ Khaled decided to meet with the dean.
          They sat down in the dean&#39;s office, surrounded by shelves filled with books on art, music, and philosophy.
          The dean explained the vision for a new course that would blend music, creativity, and entrepreneurship. It
          would be a course like no other—a course that would inspire students to pursue their passions and manifest
          their dreams.
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.image13}></div>
      <div className={classes.image14}></div>
      <div className={classes.professorK}></div>
      <div className={classes.studentHall}></div>
      <div className={classes.theConceptP}>
        The concept fascinated DJ Khaled, and he knew deep down that this was an opportunity he couldn&#39;t pass up. He
        envisioned a class where he could not only teach about music production but also mentor aspiring artists and
        entrepreneurs, passing down the wisdom he had gained throughout his career.
      </div>
      <div className={classes.orangeKhaled}></div>
      <div className={classes.speechKhaled}></div>
      <div className={classes.excitedAboutP}>
        <div className={classes.textBlock3}>
          Excited about the possibilities, DJ Khaled accepted the invitation and began his journey as Professor Khaled.
          He spent countless hours crafting lesson plans, designing engaging activities, and curating a syllabus that
          would empower his students to reach their full potential.
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
        <div className={classes.textBlock5}>
          On the first day of class, a diverse group of students walked into the lecture hall, unsure of what to expect.
          They found themselves face-to-face with DJ Khaled, who stood at the front of the room, radiating positivity
          and confidence. The energy in the room was palpable.
        </div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
      </div>
      <div className={classes.goldenKhaled}></div>
      <div className={classes.professorKhaledKickedOffP}>
        <div className={classes.textBlock7}>
          Professor Khaled kicked off the semester with an electrifying speech, sharing stories from his own life,
          emphasizing the importance of hard work, perseverance, and staying true to oneself. He used his catchphrases
          to inspire his students, repeating phrases like &quot;Another one!&quot; and &quot;Major key alert!&quot; to
          drive home important lessons about resilience and the pursuit of success.
        </div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
        <div className={classes.textBlock9}>
          As the weeks went by, Professor Khaled guided his students through the intricacies of music production,
          entrepreneurship, and personal development. He invited guest speakers from the industry, organized hands-on
          workshops, and encouraged his students to collaborate and create their own music projects.
        </div>
        <div className={classes.textBlock10}>
          <p></p>
        </div>
        <div className={classes.textBlock11}>
          <p></p>
        </div>
      </div>
      <div className={classes.yearPassedP}>
        <div className={classes.textBlock12}>
          Years passed, and Professor Khaled&#39;s impact extended far beyond the confines of the classroom. Many of his
          students went on to achieve great success in the music industry, launching their own careers and attributing
          their accomplishments to the wisdom and guidance they had received from their beloved professor.
        </div>
        <div className={classes.textBlock13}>
          <p></p>
        </div>
        <div className={classes.textBlock14}>
          Professor Khaled&#39;s journey from DJ to professor was a testament to the power of passion, perseverance, and
          the ability to inspire others. He had found a new purpose in life, one that allowed him to touch the lives of
          countless individuals and leave an indelible
        </div>
      </div>
      <div className={classes.professorKhaled}>
        <div className={classes.textBlock15}>
          Professor Khaled&#39;s infectious enthusiasm and genuine passion for his craft transformed the classroom into
          a hub of creativity and inspiration. He pushed his students to think outside the box, to embrace failure as a
          stepping stone to success, and to believe in their own unique abilities.
        </div>
        <div className={classes.textBlock16}>
          <p></p>
        </div>
        <div className={classes.textBlock17}>
          Word of Professor Khaled&#39;s transformative teaching spread throughout the university and beyond. Students
          from other disciplines flocked to his classes, eager to experience the electrifying atmosphere he had
          cultivated. His lectures became legendary, often filled with surprise appearances from famous musicians and
          industry insiders, who recognized the value of Professor Khaled&#39;s teachings.
        </div>
        <div className={classes.textBlock18}>
          <p></p>
        </div>
        <div className={classes.textBlock19}>
          <p></p>
        </div>
      </div>
      <div className={classes.redKhaled}></div>
      <div className={classes.blueKhaled}></div>
      <div className={classes.graduatingStudents}></div>
    </div>
    </AppLayout>
  );
});

export default VisualTwo;
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Intuitive Drag-and-Drop Interface',
    Svg: require('@site/static/img/intuitive-ui-amico.svg').default,
    description: (
      <>
        Create mathematical animations without coding. Simply drag components onto 
        the canvas and arrange them visually, making complex video creation accessible 
        to everyone regardless of technical background.
      </>
    ),
  },
  {
    title: 'Powerful Mathematical Visualizations',
    Svg: require('@site/static/img/powerful-athematics-amico.svg').default,
    description: (
      <>
        Bring abstract concepts to life with dynamic visualizations of equations, 
        geometric transformations, calculus concepts, and more. AniMathIO handles 
        the complex rendering so you can focus on your mathematical narrative.
      </>
    ),
  },
  {
    title: 'Built for Educators and Students',
    Svg: require('@site/static/img/educators-and-students-amico.svg').default,
    description: (
      <>
        Designed specifically for mathematics education. Create engaging learning 
        materials, interactive demonstrations, and crystal-clear explanations of 
        complex topics in minutes instead of hours.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

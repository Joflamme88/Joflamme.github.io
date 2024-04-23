// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import { v4 as uuidv4 } from 'uuid';
import { ProjetType } from '../../../../@types/project';
import './Projet.scss';

interface ProjetProp {
  projet: ProjetType;
}

function Projet({ projet }: ProjetProp) {
  const boxDescriptions = projet.box_description.map((boxDescription) => (
    <p key={uuidv4()}>{boxDescription}</p>
  ));

  const descriptions = projet.description.map((description) => (
    <div key={uuidv4()}>
      <p className="portfolio-card-detail-title">{description.title}</p>
      <p className="portfolio-card-detail-description">
        {description.description}
      </p>
    </div>
  ));

  return (
    <div className="portfolio-card">
      <div className="portfolio-card-box">
        <div className="portfolio-card-box-img">
          <img src={projet.image} alt="projet" />
        </div>
        <div className="portfolio-card-box-info">
          <h4>{projet.box_title}</h4>
          {boxDescriptions}
          <a href={projet.link_box}>
            <Icon icon="fluent:expand-up-right-16-filled" />
          </a>
        </div>
      </div>
      <div className="portfolio-card-detail">
        <h4>{projet.name}</h4>
        {descriptions}
        {projet.button && (
          <a href={projet.button_link}>{projet.button_title}</a>
        )}
        {projet.button_link2 && (
          <a href={projet.button_link2}>{projet.button_title2}</a>
        )}
      </div>
    </div>
  );
}

export default Projet;

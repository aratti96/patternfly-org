import React from 'react';
import { Card, CardTitle, CardHeader, CardBody, CardFooter, Button } from '@patternfly/react-core';
import { ExternalLinkAltIcon, CubesIcon, ClockIcon, RunningIcon, PuzzlePieceIcon, ChartBarIcon } from '@patternfly/react-icons';
import { Link } from 'theme-patternfly-org/components/link/link';
import { capitalize } from 'theme-patternfly-org/helpers/capitalize';
import './trainingCard.css';

const getTrainingIcon = trainingType => {
  if (['html-css', 'react'].includes(trainingType)) {
    return <CubesIcon className="pf-org__training-basics" />;
  }
  else if (trainingType === 'react-components') {
    return <PuzzlePieceIcon className="pf-org__training-components" />;
  }

  return <ChartBarIcon className="pf-org__training-charts" />;
}

export const TrainingCard = ({
  trainingType,
  level,
  title,
  time,
  description,
  katacodaId
}) => (
  <Card className="pf-org__card" isCompact>
    <CardHeader>
      <Card className="pf-org__card-small">
        {getTrainingIcon(trainingType)}
      </Card>
      <div className="pf-org__level">
        <RunningIcon className={`pf-org__level-${level}`} />
        {capitalize(level)}
      </div>
    </CardHeader>
    <CardTitle>
      {title}
    </CardTitle>
    <CardBody>
      <div className="pf-org__time">
        <ClockIcon />
        {time}
      </div>
      {description}
    </CardBody>
    <CardFooter>
    <Link to={`https://www.katacoda.com/patternfly/courses/${trainingType}/${katacodaId}`} target="_blank">
      <Button variant="link">
        Start
        <ExternalLinkAltIcon />
      </Button>
    </Link>
    </CardFooter>
  </Card>
);

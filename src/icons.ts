import { LabIcon } from '@jupyterlab/ui-components';

import touchcommSvg from '../style/icons/document-svgrepo-com.svg';
import asicprogrammerSvg from '../style/icons/document-svgrepo-com.svg';

export const touchcommIcon = new LabIcon({
  name: 'webds_documentation:touchcomm',
  svgstr: touchcommSvg
});

export const asicprogrammerIcon = new LabIcon({
    name: 'webds_documentation:asicprogrammer',
    svgstr: asicprogrammerSvg
  });

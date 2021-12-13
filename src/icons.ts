import { LabIcon } from '@jupyterlab/ui-components';

import touchcommSvg from '../style/icons/document-svgrepo-com.svg';
import asicprogrammerSvg from '../style/icons/document-svgrepo-com.svg';

export const touchcommDocIcon = new LabIcon({
  name: 'webds_documentation:touchcomm_icon',
  svgstr: touchcommSvg
});

export const asicprogrammerDocIcon = new LabIcon({
    name: 'webds_documentation:asicprogrammer_icon',
    svgstr: asicprogrammerSvg
  });

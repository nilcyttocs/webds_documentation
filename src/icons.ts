import { LabIcon } from '@jupyterlab/ui-components';

import confluenceSvg from '../style/icons/confluence-svgrepo-com.svg';
import {
  default as asicprogrammerSvg,
  default as touchcommSvg
} from '../style/icons/document-svgrepo-com.svg';
import jiraSvg from '../style/icons/jira-svgrepo-com.svg';

export const touchcommDocIcon = new LabIcon({
  name: 'webds_documentation:touchcomm_icon',
  svgstr: touchcommSvg
});

export const asicprogrammerDocIcon = new LabIcon({
  name: 'webds_documentation:asicprogrammer_icon',
  svgstr: asicprogrammerSvg
});

export const confluenceDocIcon = new LabIcon({
  name: 'webds_documentation:confluence_icon',
  svgstr: confluenceSvg
});

export const jiraDocIcon = new LabIcon({
  name: 'webds_documentation:jira_icon',
  svgstr: jiraSvg
});

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ILauncher } from '@jupyterlab/launcher';

import {
  touchcommDocIcon,
  asicprogrammerDocIcon,
  confluenceDocIcon,
  jiraDocIcon
} from './icons';

const touchcommDoc = 'Synaptics/Documentation/User_Guides/TouchComm/TouchComm_User_Guide';
const asicprogrammerDoc = 'Synaptics/Documentation/User_Guides/AsicProgrammer/AsicProgrammer_User_Guide';
const confluenceDoc = 'https://confluence.synaptics.com/display/PRJRN/Desk+Side+Development+Kit';
const jiraDoc = 'https://jira.synaptics.com/browse/DSDK';

/**
 * Initialization data for the @webds/documentation extension.
 */
const touchcomm: JupyterFrontEndPlugin<void> = {
  id: '@webds/documentation:touchcomm',
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log('JupyterLab plugin @webds/documentation:touchcomm is activated!');

    const {commands, shell} = app;
    const command: string = 'webds_documentation_touchcomm:open';
    commands.addCommand(command, {
      label: 'TouchComm User Guide',
      caption: 'TouchComm User Guide',
      icon: args => (args['isLauncher'] ? touchcommDocIcon : undefined),
      execute: async () => {
        commands.execute('docmanager:open', {
          path: touchcommDoc,
          factory: 'HTML Viewer',
          options: {mode: 'split-right'}
        })
        .then((widget) => {
          widget.id = 'webds_touchcomm_user_guide_widget';
          widget.title.closable = true;
          if (!widget.isAttached)
            shell.add(widget, 'main');
          shell.activateById(widget.id);
        });
      },
    });

    launcher.add({command, args: {isLauncher: true}, category: 'DSDK - Documentation', rank: 2});
  }
};

const asicprogrammer: JupyterFrontEndPlugin<void> = {
  id: '@webds/documentation:asicprogrammer',
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log('JupyterLab plugin @webds/documentation:asicprogrammer is activated!');

    const {commands, shell} = app;
    const command: string = 'webds_documentation_asicprogrammer:open';
    commands.addCommand(command, {
      label: 'AsicProgrammer User Guide',
      caption: 'AsicProgrammer User Guide',
      icon: args => (args['isLauncher'] ? asicprogrammerDocIcon : undefined),
      execute: async () => {
        commands.execute('docmanager:open', {
          path: asicprogrammerDoc,
          factory: 'HTML Viewer',
          options: {mode: 'split-right'}
        })
        .then((widget) => {
          widget.id = 'webds_asicprogrammer_user_guide_widget';
          widget.title.closable = true;
          if (!widget.isAttached)
            shell.add(widget, 'main');
          shell.activateById(widget.id);
        });
      },
    });

    launcher.add({command, args: {isLauncher: true}, category: 'DSDK - Documentation', rank: 3});
  }
};

const confluence: JupyterFrontEndPlugin<void> = {
  id: '@webds/documentation:confluence',
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log('JupyterLab plugin @webds/documentation:confluence is activated!');

    const {commands} = app;
    const command: string = 'webds_documentation_confluence:open';
    commands.addCommand(command, {
      label: 'DSDK Confluence',
      caption: 'DSDK Confluence',
      icon: args => (args['isLauncher'] ? confluenceDocIcon : undefined),
      execute: () => {
        window.open(confluenceDoc, '_blank')?.focus();
      },
    });

    launcher.add({command, args: {isLauncher: true}, category: 'DSDK - Documentation', rank: 0});
  }
};

const jira: JupyterFrontEndPlugin<void> = {
  id: '@webds/documentation:jira',
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log('JupyterLab plugin @webds/documentation:jira is activated!');

    const {commands} = app;
    const command: string = 'webds_documentation_jira:open';
    commands.addCommand(command, {
      label: 'DSDK Jira',
      caption: 'DSDK Jira',
      icon: args => (args['isLauncher'] ? jiraDocIcon : undefined),
      execute: () => {
        window.open(jiraDoc, '_blank')?.focus();
      },
    });

    launcher.add({command, args: {isLauncher: true}, category: 'DSDK - Documentation', rank: 1});
  }
};

export default [touchcomm, asicprogrammer, confluence, jira];

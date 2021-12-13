import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ILauncher } from '@jupyterlab/launcher';

import {
  touchcommDocIcon,
  asicprogrammerDocIcon
} from './icons';

const touchcommDoc = 'Synaptics/Documentation/User_Guides/TouchComm/TouchComm_User_Guide';
const asicprogrammerDoc = 'Synaptics/Documentation/User_Guides/AsicProgrammer/AsicProgrammer_User_Guide'

/**
 * Initialization data for the @webds/documentation extension.
 */
const touchcomm: JupyterFrontEndPlugin<void> = {
  id: '@webds/documentation:touchcomm',
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log('JupyterLab plugin @webds/documentation:touchcomm is activated!');

    const { commands, shell } = app;
    const command: string = 'webds_documentation_touchcomm:open';
    commands.addCommand(command, {
      label: 'TouchComm User Guide',
      caption: 'TouchComm User Guide',
      icon: args => (args['isLauncher'] ? touchcommDocIcon : undefined),
      execute: async () => {
        commands.execute('docmanager:open', {
          path: touchcommDoc,
          factory: 'HTML Viewer',
          options: {
            mode: 'split-right'
          }
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

    launcher.add({ command, args: { isLauncher: true }, category: 'WebDS_Documentation', rank: 0 });
  }
};

const asicprogrammer: JupyterFrontEndPlugin<void> = {
  id: '@webds/documentation:asicprogrammer',
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log('JupyterLab plugin @webds/documentation:asicprogrammer is activated!');

    const { commands, shell } = app;
    const command: string = 'webds_documentation_asicprogrammer:open';
    commands.addCommand(command, {
      label: 'AsicProgrammer User Guide',
      caption: 'AsicProgrammer User Guide',
      icon: args => (args['isLauncher'] ? asicprogrammerDocIcon : undefined),
      execute: async () => {
        commands.execute('docmanager:open', {
          path: asicprogrammerDoc,
          factory: 'HTML Viewer',
          options: {
            mode: 'split-right'
          }
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

    launcher.add({ command, args: { isLauncher: true }, category: 'WebDS_Documentation', rank: 1 });
  }
};

export default [touchcomm, asicprogrammer];

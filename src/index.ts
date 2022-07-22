import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

import { ILauncher } from "@jupyterlab/launcher";

import {
  touchcommDocIcon,
  asicprogrammerDocIcon,
  confluenceDocIcon,
  jiraDocIcon
} from "./icons";

/**
 * Initialization data for the @webds/documentation extension.
 */

namespace ConfluenceAttributes {
  export const command = "webds_documentation_confluence:open";
  export const label = "DSDK Confluence";
  export const caption = "DSDK Confluence";
  export const category = "DSDK - Documentation";
  export const rank = 10;
  export const link =
    "https://confluence.synaptics.com/display/PRJRN/Desk+Side+Development+Kit";
}
const confluence: JupyterFrontEndPlugin<void> = {
  id: "@webds/documentation:confluence",
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log(
      "JupyterLab plugin @webds/documentation:confluence is activated!"
    );

    const { commands } = app;
    const command = ConfluenceAttributes.command;
    commands.addCommand(command, {
      label: ConfluenceAttributes.label,
      caption: ConfluenceAttributes.caption,
      icon: (args) => (args["isLauncher"] ? confluenceDocIcon : undefined),
      execute: () => {
        window.open(ConfluenceAttributes.link, "_blank")?.focus();
      }
    });

    launcher.add({
      command,
      args: { isLauncher: true },
      category: ConfluenceAttributes.category,
      rank: ConfluenceAttributes.rank
    });
  }
};

namespace JiraAttributes {
  export const command = "webds_documentation_jira:open";
  export const label = "DSDK Jira";
  export const caption = "DSDK Jira";
  export const category = "DSDK - Documentation";
  export const rank = 20;
  export const link = "https://jira.synaptics.com/browse/DSDK";
}
const jira: JupyterFrontEndPlugin<void> = {
  id: "@webds/documentation:jira",
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log("JupyterLab plugin @webds/documentation:jira is activated!");

    const { commands } = app;
    const command = JiraAttributes.command;
    commands.addCommand(command, {
      label: JiraAttributes.label,
      caption: JiraAttributes.caption,
      icon: (args) => (args["isLauncher"] ? jiraDocIcon : undefined),
      execute: () => {
        window.open(JiraAttributes.link, "_blank")?.focus();
      }
    });

    launcher.add({
      command,
      args: { isLauncher: true },
      category: JiraAttributes.category,
      rank: JiraAttributes.rank
    });
  }
};

namespace TouchCommAttributes {
  export const command = "webds_documentation_touchcomm:open";
  export const id = "webds_touchcomm_user_guide_widget";
  export const label = "TouchComm User Guide";
  export const caption = "TouchComm User Guide";
  export const category = "DSDK - Documentation";
  export const rank = 30;
  export const link =
    "Synaptics/Documentation/User_Guides/TouchComm/TouchComm_User_Guide";
}
const touchcomm: JupyterFrontEndPlugin<void> = {
  id: "@webds/documentation:touchcomm",
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log(
      "JupyterLab plugin @webds/documentation:touchcomm is activated!"
    );

    const { commands, shell } = app;
    const command = TouchCommAttributes.command;
    commands.addCommand(command, {
      label: TouchCommAttributes.label,
      caption: TouchCommAttributes.caption,
      icon: (args) => (args["isLauncher"] ? touchcommDocIcon : undefined),
      execute: async () => {
        commands
          .execute("docmanager:open", {
            path: TouchCommAttributes.link,
            factory: "HTML Viewer",
            options: { mode: "split-right" }
          })
          .then((widget) => {
            widget.id = TouchCommAttributes.id;
            widget.title.closable = true;
            if (!widget.isAttached) shell.add(widget, "main");
            shell.activateById(widget.id);
          });
      }
    });

    launcher.add({
      command,
      args: { isLauncher: true },
      category: TouchCommAttributes.category,
      rank: TouchCommAttributes.rank
    });
  }
};

namespace AsicProgrammerAttributes {
  export const command = "webds_documentation_asicprogrammer:open";
  export const id = "webds_asicprogrammer_user_guide_widget";
  export const label = "AsicProgrammer User Guide";
  export const caption = "AsicProgrammer User Guide";
  export const category = "DSDK - Documentation";
  export const rank = 40;
  export const link =
    "Synaptics/Documentation/User_Guides/AsicProgrammer/AsicProgrammer_User_Guide";
}
const asicprogrammer: JupyterFrontEndPlugin<void> = {
  id: "@webds/documentation:asicprogrammer",
  autoStart: true,
  requires: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    console.log(
      "JupyterLab plugin @webds/documentation:asicprogrammer is activated!"
    );

    const { commands, shell } = app;
    const command = AsicProgrammerAttributes.command;
    commands.addCommand(command, {
      label: AsicProgrammerAttributes.label,
      caption: AsicProgrammerAttributes.caption,
      icon: (args) => (args["isLauncher"] ? asicprogrammerDocIcon : undefined),
      execute: async () => {
        commands
          .execute("docmanager:open", {
            path: AsicProgrammerAttributes.link,
            factory: "HTML Viewer",
            options: { mode: "split-right" }
          })
          .then((widget) => {
            widget.id = AsicProgrammerAttributes.id;
            widget.title.closable = true;
            if (!widget.isAttached) shell.add(widget, "main");
            shell.activateById(widget.id);
          });
      }
    });

    launcher.add({
      command,
      args: { isLauncher: true },
      category: AsicProgrammerAttributes.category,
      rank: AsicProgrammerAttributes.rank
    });
  }
};

export default [confluence, jira, touchcomm, asicprogrammer];

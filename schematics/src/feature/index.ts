import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  template,
  mergeWith,
  SchematicsException,
  move
} from "@angular-devkit/schematics";
import { FeatureSchema } from "./schema";
import { strings } from "@angular-devkit/core";
import { buildDefaultPath } from "@schematics/angular/utility/project";
import { parseName } from "@schematics/angular/utility/parse-name";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function feature(options: FeatureSchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    if (!options.pluralName) {
      options.pluralName = options.name + "s";
    }

    const workspaceBuffer = tree.read("angular.json");
    if (!workspaceBuffer) {
      throw new SchematicsException("Not an angular CLI workspace");
    }

    const workspaceConfig = JSON.parse(workspaceBuffer.toString());
    const projectName = options.project || workspaceConfig.defaultProject;
    const project = workspaceConfig.projects[projectName];

    const defaultProjectPath = buildDefaultPath(project);
    const parsedPath = parseName(defaultProjectPath, options.name);

    const { name, path } = parsedPath;

    const sourceTemplates = url("./files");

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ...options,
        ...strings,
        name
      }),
      move(path)
    ]);

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}

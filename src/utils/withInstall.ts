import type { App, DefineComponent, Plugin } from "vue";

export const withInstall = <T extends DefineComponent>(
  comp: T & { name?: string }
) => {
  // eslint-disable-next-line no-unused-vars
  const c = comp as T & { name: string } & { install?: (app: App) => void };

  c.install = (app: App) => {
    if (!c.name || typeof c.name !== "string") {
      throw new Error("Component must have a valid name property");
    }
    app.component(c.name, c);
  };

  return c as T & Plugin;
};

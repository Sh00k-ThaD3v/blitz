import {log} from "@blitzjs/display"
// import * as fs from "fs"
import {normalize, ServerConfig} from "./config"
import {customServerExists, nextStart, startCustomServer} from "./next-utils"

export async function prod(config: ServerConfig) {
  const {rootFolder, nextBin} = await normalize(config)

  if (customServerExists()) {
    log.success("Using your custom server")
    await startCustomServer(rootFolder, config)
  } else {
    await nextStart(nextBin, rootFolder, config)
  }
}

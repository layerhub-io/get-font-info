import run from "./run";
import parse from "./parse";
import command from "./command";

export default async function (path: string) {
  const metadata = await run(command(path));
  const fontInfo = parse(metadata);
  return fontInfo;
}

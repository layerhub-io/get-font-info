import run from "./run";
import parse from "./parse";
import command, { checkInstallation } from "./command";

export default async function(path: string) {
  try {
    await run(checkInstallation());
  } catch (err) {
    throw new Error(
      "fc-scan is not installed. Please install it before continuing."
    );
  }
  try {
    const metadata = await run(command(path));
    const fontInfo = parse(metadata);
    return fontInfo;
  } catch (err) {
    console.log("Something went wrong");
  }
}

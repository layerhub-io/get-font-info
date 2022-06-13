import { exec } from "child_process";

export default function(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return resolve(stderr);
      resolve(stdout);
    });
  });
}

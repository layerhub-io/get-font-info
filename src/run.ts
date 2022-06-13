import { exec } from "child_process";

export default function (path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`fc-scan ${path}`, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });
}

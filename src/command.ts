export default function(path: string) {
  return `fc-scan ${path}`;
}

export const checkInstallation = () => {
  return "fc-scan --version";
};

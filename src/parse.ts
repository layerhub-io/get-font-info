const BOOLEANS = ["True", "False"];

// const parseInstallation = () => {

// }

export default function(metadata: string) {
  let fontInfo: Record<string, any> = {};

  // Split and remove additional chars
  metadata.split("\n").forEach((line) => {
    if (!line.match(new RegExp("\\d"))) {
      const fixed = line.substring(0 + 1, line.length - 3);
      if (fixed.includes(":")) {
        const [key, value] = fixed.split(":");
        fontInfo[key] = value.trim();
      }
    }
  });

  // Remove additiona quotation mark from string
  Object.keys(fontInfo).forEach((k) => {
    const v = fontInfo[k];
    const ss = v.match(new RegExp(`"\s*([^"]*)\s*"`));
    if (ss) {
      fontInfo[k] = ss[1];
    }
  });

  // Fix boolean values
  Object.keys(fontInfo).forEach((key) => {
    const value = fontInfo[key];
    if (BOOLEANS.includes(value)) {
      fontInfo[key] = value === BOOLEANS[1];
    }
  });
  return fontInfo;
}

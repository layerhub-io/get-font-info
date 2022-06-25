const BOOLEANS = ["True", "False"];

export default function(metadata: string) {
  let fontInfo: Record<string, any> = {};

  const filteredMetadata = metadata.split("\n").filter((line) => {
    return line.includes("(s)") && line.includes(":");
  });

  filteredMetadata.forEach((f) => {
    const tabRemoved = f.replace(/\t+/g, "");
    const [key, tempValue] = tabRemoved.split(":");
    const value = tempValue
      .split("(s)")[0]
      .replace(/\"+/g, "")
      .trim();
    fontInfo[key] = value;
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

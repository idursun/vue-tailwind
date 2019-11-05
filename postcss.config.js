function matchClasses(data) {
  let index = 0;
  let current = "";
  let result = [];
  let inQuotes = false;
  let inApply = false;
  while (index < data.length) {
    const c = data[index++];
    let changeQuotes = false;

    switch (c) {
      case '"':
        if (!inQuotes) {
          inQuotes = true;
        } else {
          changeQuotes = true;
        }
      case " ":
      case "!":
      case ",":
      case "<":
      case ">":
      case '"':
      case "'":
      case "#":
      case "{":
      case "}":
      case ";":
      case "=":
      case "\n":
        if (current == "@apply") {
          inApply = true;
        }
        if (!inQuotes && current.startsWith("class:")) {
          current = current.substr(current.indexOf("class:") + 6);
          result.push(current);
        } else if ((inQuotes || inApply) && current != "") {
          result.push(current);
        }
        if (c == '"' && inApply) {
          inApply = false;
        }
        current = "";
        break;
      default:
        current = current + c;
        break;
    }

    if (changeQuotes) {
      inQuotes = false;
      changeQuotes = false;
    }
  }

  return result;
}

const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.svelte"],
  whitelist: ["body", "h1", "h2", "h3", "h4", "h5", "ul", "ol", "li", "html"],
  whitelistPatterns: [/\.*svelte.*/, /fa\-\w*/],

  // Include any special characters you're using in this regular expression
  defaultExtractor: matchClasses
});

const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
    //...(process.env.NODE_ENV == "production" ? [purgecss, cssnano] : [])
  ]
};

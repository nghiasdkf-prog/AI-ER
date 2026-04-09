const fs = require('fs');
let data = fs.readFileSync('script-astera-auth.js', 'utf8');

data = data.replace(
  /onclick="([a-zA-Z0-9_]+)\(\$\{product\.id\}\)"/g,
  "onclick=\"$1('${product._id || product.id}')\""
);

data = data.replace(
  /state\.favorites\.includes\((product\.id)\)/g,
  "state.favorites.includes(product._id || product.id)"
);

data = data.replace(
  /state\.cart\.find\(item => item\.id === (product\.id)\)/g,
  "state.cart.find(item => item.id === (product._id || product.id))"
);

fs.writeFileSync('script-astera-auth.js', data);
console.log("File patched!");

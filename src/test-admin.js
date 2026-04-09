// Native fetch

async function testAdmin() {
  try {
    // 1. Login to get token
    const loginRes = await fetch("http://localhost:3000/api/login", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@astera.vn", password: "admin123" })
    });
    const loginData = await loginRes.json();
    console.log("Login Status:", loginRes.status);
    if (!loginRes.ok) return console.log(loginData);

    const token = loginData.token;

    // 2. Fetch products
    const pRes = await fetch("http://localhost:3000/api/products");
    const products = await pRes.json();
    if (!products.length) return console.log("No products");

    const p = products[0];

    // 3. Try to add a product
    const addRes = await fetch("http://localhost:3000/api/products", {
      method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      body: JSON.stringify({ name: "Test Device", brand: "TestBrand", category: "Flagship", price: 100000 })
    });
    console.log("Add Product Status:", addRes.status);
    console.log(await addRes.json());

    // 4. Try to edit the product
    const editRes = await fetch(`http://localhost:3000/api/products/${p._id}`, {
      method: "PUT", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      body: JSON.stringify({ price: 200000 })
    });
    console.log("Edit Product Status:", editRes.status);
    console.log(await editRes.json());

  } catch(e) {
    console.error(e);
  }
}
testAdmin();

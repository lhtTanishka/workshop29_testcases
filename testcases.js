// Parse response JSON once
let jsonData = pm.response.json();

// 1. Status code is 200
pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

// 2. Response is JSON
pm.test("Response is JSON", () => {
    pm.response.to.be.json;
});

// 3. Response is an array
pm.test("Response is an array", () => {
    pm.expect(Array.isArray(jsonData)).to.be.true;
});

// 4. Array length is 10
pm.test("Response array has 10 users", () => {
    pm.expect(jsonData.length).to.eql(10);
});

// 5. First user has id, name, email
pm.test("First user has id, name, email", () => {
    pm.expect(jsonData[0]).to.have.property("id");
    pm.expect(jsonData[0]).to.have.property("name");
    pm.expect(jsonData[0]).to.have.property("email");
});

// 6. User id is a number
pm.test("User id is a number", () => {
    pm.expect(typeof jsonData[0].id).to.eql("number");
});

// 7. Email has valid format (simple regex)
pm.test("Email format is valid", () => {
    pm.expect(jsonData[0].email).to.match(/\S+@\S+\.\S+/);
});

// 8. Response time less than 500ms
pm.test("Response time is less than 500ms", () => {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

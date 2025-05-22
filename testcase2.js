pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);  // Should pass if response is 200
});

pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500); // Likely pass/fail depending on response
});

pm.test("Response is JSON", function () {
    pm.response.to.be.json;  // Pass if Content-Type is application/json
});

pm.test("Response body is not empty", function () {
    pm.expect(pm.response.text().length).to.be.above(0); // Pass if body has content
});

// Assuming response is an array of user objects
let jsonData = pm.response.json();

// This test will pass if first object has 'userId'
pm.test("First object has userId", function () {
    pm.expect(jsonData[0]).to.have.property("userId");
});

// This test will fail intentionally: check a property that probably does not exist
pm.test("First object has 'nonExistentProperty'", function () {
    pm.expect(jsonData[0]).to.have.property("nonExistentProperty");
});

// This test will pass if at least one object has id 1
pm.test("At least one object has id = 1", function () {
    let found = jsonData.some(item => item.id === 1);
    pm.expect(found).to.be.true;
});

// This test will fail intentionally: check status code 404 (usually won't be)
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});

// This test will pass if the response array length is more than 5
pm.test("Response array length is greater than 5", function () {
    pm.expect(jsonData.length).to.be.above(5);
});

// This test will fail intentionally: check if response array length is greater than 1000
pm.test("Response array length is greater than 1000", function () {
    pm.expect(jsonData.length).to.be.above(1000);
});

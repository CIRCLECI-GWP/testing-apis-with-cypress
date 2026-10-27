describe("Users api testing", () => {
  it("fetches users - GET", () => {
    cy.request("/users?page=2").as("usersRequest");
    cy.get("@usersRequest").then((users) => {
      expect(users.status).to.eq(200);
      assert.isArray(users.body.data, "Users Response is an array");
    });
  });

  it("creates a user - POST", () => {
    cy.request("POST", "/users", { name: "morpheus", job: "leader" }).as("createUserRequest");
    cy.get("@createUserRequest").then((user) => {
      expect(user.status).to.eq(201);
      expect(user.body).to.include({ name: "morpheus", job: "leader" });
    });
  });
});

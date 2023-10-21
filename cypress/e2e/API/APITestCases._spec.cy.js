let token, contactid 
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
describe('template spec', () => {
    it('passes', () => {
        //Getting response from browserstack demo website 
        cy.request('POST', 'https://thinking-tester-contact-list.herokuapp.com/users', {
            "firstName": "Test1",
            "lastName": "User1",
            "email": `${id}@gmail.com`,
            "password": "thePassword"
        }).then((response) => {
            token = response.body.token
            cy.log(token)
            //Expecting the response status code to be 200
            expect(response.status).to.eq(201)
        })
    })
    it('getuserpasses', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({ method: 'GET', url: 'https://thinking-tester-contact-list.herokuapp.com/users/me', headers: { authorization } })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('updateuser', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({
            method: 'PATCH', url: 'https://thinking-tester-contact-list.herokuapp.com/users/me', headers: { authorization }, body: {
                "firstName": "Updated",
                "lastName": "Username",
                "email": `${id}@gmail.com`,
                "password": "thePassword"
            }
        })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('addcontact', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({
            method: 'POST', url: 'https://thinking-tester-contact-list.herokuapp.com/contacts', headers: { authorization }, body: {
                "firstName": "John",
                "lastName": "Doe",
                "birthdate": "1970-01-01",
                "email": "jdoe@fake.com",
                "phone": "8005555555",
                "street1": "1 Main St.",
                "street2": "Apartment A",
                "city": "Anytown",
                "stateProvince": "KS",
                "postalCode": "12345",
                "country": "USA"
            }
        }).then((response) => {
            contactid = response.body._id
            //Expecting the response status code to be 200
            expect(response.status).to.eq(201)
        })
    })
    it('getcontact', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({ method: 'GET', url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${contactid}`, headers: { authorization } })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('getcontactlist', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({ method: 'GET', url: "https://thinking-tester-contact-list.herokuapp.com/contacts", headers: { authorization } })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('updatecontact', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({
            method: 'PUT', url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${contactid}`, headers: { authorization }, body: {
                "firstName": "Johnny",
                "lastName": "Doe",
                "birthdate": "1970-01-01",
                "email": "cwm@email.com",
                "phone": "8005555555",
                "street1": "1 Main St.",
                "street2": "Apartment A",
                "city": "Anytown",
                "stateProvince": "KS",
                "postalCode": "12345",
                "country": "USA"
            }
        })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('updatecontactpatch', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({
            method: 'PATCH', url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${contactid}`, headers: { authorization }, body: {
                "firstName": "Jonathan",
            }
        })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('deletecontact', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({
            method: 'DELETE', url: `https://thinking-tester-contact-list.herokuapp.com/contacts/${contactid}`, headers: { authorization }
        })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('loginuser', () => {
        //Getting response from browserstack demo website
        cy.request({
            method: 'POST', url: 'https://thinking-tester-contact-list.herokuapp.com/users/login', body: {
                "email": `${id}@gmail.com`,
                "password": "thePassword"
            }
        })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('logoutpasses', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({ method: 'POST', url: 'https://thinking-tester-contact-list.herokuapp.com/users/logout', headers: { authorization } })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('loginuser', () => {
        //Getting response from browserstack demo website
        cy.request({
            method: 'POST', url: 'https://thinking-tester-contact-list.herokuapp.com/users/login', body: {
                "email": `${id}@gmail.com`,
                "password": "thePassword"
            }
        })
            .then((response) => {
                token = response.body.token
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
    it('deleteuserpasses', () => {
        //Getting response from browserstack demo website
        let authorization = `Bearer ${token}`;
        cy.request({ method: 'DELETE', url: 'https://thinking-tester-contact-list.herokuapp.com/users/me', headers: { authorization } })
            .then((response) => {
                //Expecting the response status code to be 200
                expect(response.status).to.eq(200)
            })
    })
})
// @ts-check

export class GlobalVariables {

    constructor() {
        this.uniqueTestEmail = `testuser_${Date.now()}@example.com`;
        this.userEmail = 'zahid.asim@expertflow.com' 
        this.userDetails = {
            name: 'Test User',
            email: this.uniqueTestEmail,
            password: 'Abc@1234',
            dob: { day: '5', month: '4', year: '1982' },
            firstName: 'Zahid',
            lastName: 'Asim',
            company: 'Test Inc.',
            address: 'Judicial Society',
            country: 'Canada',
            state: 'Punjab',
            city: 'Lahore',
            zipcode: '54000',
            mobileNumber: '03001234567'
        };
    }

}
faker = Npm.require('faker');

Meteor.startup(() => {
  // console.log( faker.commerce);
  // console.log(Object.keys(faker.name))
});

Meteor.methods({
  'autoLogin/createUser'(params) {
    const profile = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      company: faker.company.companyName(),
      position: faker.name.jobTitle(),
      picture: faker.image.avatar(),
      sampleData: true,
    };
    const options = {
      username: faker.internet.userName(),
      password: Random.id(),
      profile: profile,
      email: params.noEmail ? '' : faker.internet.email(),
      type: params.userType,
    };
    if (params.userType === 666) {
      options.profileSet = true;
      options.socialSet = true;
    }
    options[params.userType] = true;
    const newUser = Accounts.createUser(options);

    if (newUser) {
      return options;
    }
    throw new Meteor.Error('autoLogin/createUser', 'Failed to create user', params);
  },
});

const usersData = [
    {
      username: 'Steve Spagnulo',
      email: 'scuba.steve@fake.com',
    },
    {
      username: 'Torrie Spelling',
      email: 'ts1@fake.com',
    },
    {
      username: 'BennyBoom',
      email: 'madeyalook@fake.com',
    },
    {
      username: 'Ronald Duck',
      email: 'imnotdonny@duck.com',
    },
    {
      username: 'Bill Nye',
      email: 'thescienceguy@scifi.com',
    },
    {
      username: 'Arnold the Terminator',
      email: 'gettothechoppa@wholly$#$#.com',
    },
    {
      username: 'Waffle',
      email: 'gotya@burned.com',
    },
    {
      username: 'Christopher Walken',
      email: 'nameamovieimin@guess.com',
    },
    {
      username: 'Oliver',
      email: 'boy1@currier.com',
    },
    {
      username: 'Charlie',
      email: 'boy2@currier.com',
    },
  ];
  
  const thoughtsData = [
    {
      thoughtText: 'I had a thought, but i lost it',
      reactions: [
        {
          reactionBody: 'Reaction 1 to thought 1',
          username: 'Ronald Duck',
        },
        {
          reactionBody: 'Reaction 2 to thought 1',
          username: 'Charlie',
        },
      ],
    },
    {
      thoughtText: 'Hey, here is another thought i had',
      reactions: [
        {
          reactionBody: 'Reaction 1 to thought 2',
          username: 'Oliver',
        },
      ],
    },
    {
      thoughtText: 'Once more, i run into the night, thinking of things',
    },
  ];
  
  
  
  module.exports = { usersData, thoughtsData };
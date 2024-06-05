// identify object model

/*

 USER
    -name
    -id
    -email
    -password
    -birthday
    -phone number

POST
    -title
    -body
    -comment
    likes
    createTime
    -updateTime

*/

//create model URI

/*

    https://example.com/api/users GET
    https://example.com/api/users/:id POST

    https://example.com/api/users/:id GET
    https://example.com/api/users/:id PUT/PATCH
    https://example.com/api/users/:id DELETE

    https://example.com/api/posts
    https://example.com/api/posts/:id




//create model uri

// determine representation
// single data representaion


/*
    {
        name: 'tonoy'
        id: '123'
        email: 'tonoy00@gmail.com'
        password: 'pass123'
        phone: '023232321'
        birthday: '20 july'
    },
    {
        name: 'tonoy'
        id: '123'
        email: 'tonoy00@gmail.com'
        password: 'pass123'
        phone: '023232321'
        birthday: '20 july'
    },
    {
        name: 'tonoy'
        id: '123'
        email: 'tonoy00@gmail.com'
        password: 'pass123'
        phone: '023232321'
        birthday: '20 july'
    },
    {
        name: 'tonoy'
        id: '123'
        email: 'tonoy00@gmail.com'
        password: 'pass123'
        phone: '023232321'
        birthday: '20 july'
    }

//JSON view


/*
    users: [
        {
        name: 'tonoy'
        id: '123'
        email: 'tonoy00@gmail.com'
        password: 'pass123'
        phone: '023232321'
        birthday: '20 july'
    },
    {
        name: 'tonoy'
        id: '123'
        email: 'tonoy00@gmail.com'
        password: 'pass123'
        phone: '023232321'
        birthday: '20 july'
    },
    {
        name: 'tonoy'
        id: '123'
        email: 'tonoy00@gmail.com'
        password: 'pass123'
        phone: '023232321'
        birthday: '20 july'
    },
    {
        name: 'tonoy'
        id: '123'
        email: 'tonoy00@gmail.com'
        password: 'pass123'
        phone: '023232321'
        birthday: '20 july'
    }
    ]
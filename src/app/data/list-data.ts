export const ListData:IList[] = [{
  id: 1,
  name: 'Lists created in mumbai' ,
  date: '',
  description: 'Some description temporary to show the type',
  entities : ['Users using the swiggy app currently under 10', 'People who have recently purchased the tickets to franche']
},
{
  id: 2,
  name: 'Reaching target 100x' ,
  date: '2021-01-10',
  description: '',
  entities : ['users over 10', 'users with PAN']
},
{
  id: 3,
  name: 'Users lists target' ,
  date: '2019-05-22',
  description: '',
  entities : []
},
{
  id: 4,
  name: 'Lists created in mumbai' ,
  date: '',
  description: '',
  entities : []
},
{
  id: 5,
  name: 'Amazing hotels' ,
  date: '2020-05-22',
  description: '',
  entities : ['Data 1','Data 2', 'Data 3']
},
{
  id: 6,
  name: 'People using the app' ,
  date: '2018-05-22',
  description: '',
  entities : ['People with facebook','People with google','People using windows']
},
{
  id: 7,
  name: 'Lists created in Delhi' ,
  date: '2021-05-22',
  description: 'Some users that uses the text data in delhi',
  entities : []
},
{
  id: 8,
  name: 'Sample list' ,
  date: '',
  description: '',
  entities : []
},
{
  id: 87,
  name: 'Lists created in mumbai' ,
  date: '',
  description: '',
  entities : ['Data list 1','Data list 2','Data list 3', 'Data list 4']
},
{
  id: 12,
  name: 'users with data' ,
  date: '',
  description: '',
  entities : []
},
{
  id: 144,
  name: 'Lists created in Goa',
  date:'2018-12-12',
  description: 'Some data created witj Goa',
  entities : ['beach people','Amazing cafes']
}]

export interface IList {
  id: number,
  name: string,
  date: string,
  description: string,
  entities: string[]
}

const AIRTABLE_TOKEN =
process.env.AIRTABLE_TOKEN;

const BASE_ID =
process.env.BASE_ID;

async function run(){

const response =
await fetch(
"https://hn.algolia.com/api/v1/search?query=AI"
);

const data =
await response.json();

const item =
data.hits[0];

const result =
await fetch(
`https://api.airtable.com/v0/${BASE_ID}/Tech%20News%20Tracker`,
{
method:"POST",

headers:{
Authorization:
`Bearer ${AIRTABLE_TOKEN}`,

"Content-Type":
"application/json"
},

body:JSON.stringify({

fields:{
Title:item.title,
Source:"HackerNews",
URL:item.url
}

})

});

console.log(
await result.json()
);

}

run();

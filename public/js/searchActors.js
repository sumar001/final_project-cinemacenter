const search = document.getElementById('searchbar');
const matchList = document.getElementById('match-list');

// Search IMDb names.json and filter it 
const searchActors = async searchText => {
    const res = await fetch('json/IMDb names.json');
  //  const res1 = await fetch('/IMDb movies.json');
    const names = await res.json();

   // console.log(movies);

   // Get match to current text input 
   let matches = names.filter(Name => {
       const regex = new RegExp(`^${searchText}`, 'gi');
       return Name.name.match(regex) || Name.date_of_birth.match(regex);   // Match the actors name and date of birth
   });

   if(searchText.length === 0) {
       matches =[]; //Changes back to empty array
       matchList.innerHTML =''; // This clears our search engine html, clears it
   }

   console.log(matches);

   outputHtml(matches);      // This outputs the Html which how the regex matches

};

const movies = async  searchText => {
    const res = await fetch('/public/IMDb movies.json');
    const movies = await res.json();
    var results = [];
    var searchField = "title";
    var searchVal = "year";
    for (var i = 0; i < movies.list.length; i++)
    {
        if(movies.list[i][searchField] == searchVal) {
            results.push(movies.list[i]);
        }
    }
};


// Show the results in HTML 
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-1">
            <h4>${match.name} (${match.date_of_birth}) (${match.height}) ${match.bio} <span class="text-primary">${
                match.capital
            }</span></h4>
        </div>
        `).join('')
         //   console.log(html);
        matchList.innerHTML = html;
    }
};

search.addEventListener('input', () => searchActors(search.value));


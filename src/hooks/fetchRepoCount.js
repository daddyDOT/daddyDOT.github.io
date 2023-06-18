const fetchRepoCount = async () => {
    const response = await fetch('https://api.github.com/users/daddyDOT/repos', {
        contentType: 'application/json'
    });
    const data = await response.json();
    let counter = 0;
    
    for (let i = 0; i < data.length; i++) {
        if(data[i].description === null)
        {
            continue;
        }
        else
        {
            (data[i].description.includes("#project")) && counter++;
        }
    }
    return counter;
}

export default fetchRepoCount
export async function getClient(id){
    let info = await fetch(`http://localhost:3000/clients/${id}`)
        .then(response => response.json())
        .catch(err => null);

    return info;
}